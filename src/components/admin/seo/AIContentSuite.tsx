
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { Button } from '../../ui/button';
import { Textarea } from '../../ui/textarea';
import { Input } from '../../ui/input';
import { Loader2, Download, Copy, Save } from 'lucide-react';
import { toast } from 'sonner';
import { callAiFunction, saveContent } from './utils/aiContentService';

const AIContentSuite = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeTab, setActiveTab] = useState('content');
  
  const [contentTopic, setContentTopic] = useState('');
  const [contentKeywords, setContentKeywords] = useState('');
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  
  const [textToSummarize, setTextToSummarize] = useState('');
  const [summarizedText, setSummarizedText] = useState<string | null>(null);
  
  const [keywordTopic, setKeywordTopic] = useState('');
  const [keywordAnalysis, setKeywordAnalysis] = useState<string | null>(null);
  
  const [contentTitle, setContentTitle] = useState('');

  const generateContent = async () => {
    if (!contentTopic.trim()) {
      toast.error('Please enter a topic');
      return;
    }

    try {
      setIsProcessing(true);
      
      const { result } = await callAiFunction({
        action: 'generate_content',
        prompt: contentTopic,
        keywords: contentKeywords
      });
      
      setGeneratedContent(result);
      setContentTitle(contentTopic);
      toast.success('Content generated successfully');
    } catch (error) {
      console.error('Content generation error:', error);
      toast.error('Failed to generate content');
    } finally {
      setIsProcessing(false);
    }
  };

  const summarizeText = async () => {
    if (!textToSummarize.trim()) {
      toast.error('Please enter text to summarize');
      return;
    }

    try {
      setIsProcessing(true);
      
      const { result } = await callAiFunction({
        action: 'summarize_text',
        content: textToSummarize
      });
      
      setSummarizedText(result);
      toast.success('Text summarized successfully');
    } catch (error) {
      console.error('Summarization error:', error);
      toast.error('Failed to summarize text');
    } finally {
      setIsProcessing(false);
    }
  };

  const analyzeKeywords = async () => {
    if (!keywordTopic.trim()) {
      toast.error('Please enter a topic for keyword analysis');
      return;
    }

    try {
      setIsProcessing(true);
      
      const { result } = await callAiFunction({
        action: 'keyword_analysis',
        prompt: keywordTopic
      });
      
      setKeywordAnalysis(result);
      toast.success('Keyword analysis completed');
    } catch (error) {
      console.error('Keyword analysis error:', error);
      toast.error('Failed to analyze keywords');
    } finally {
      setIsProcessing(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard');
  };

  const downloadAsText = (text: string, filename: string) => {
    const element = document.createElement('a');
    const file = new Blob([text], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${filename}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success('Downloaded successfully');
  };

  const saveToDatabase = async (content: string, type: string) => {
    if (!contentTitle.trim()) {
      toast.error('Please enter a title for this content');
      return;
    }
    
    const saved = await saveContent(contentTitle, content, type);
    if (saved) {
      toast.success('Saved to database');
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>AI Content Suite</CardTitle>
        <CardDescription>
          Generate, analyze, and optimize content with AI assistance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="content" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="content">Content Generator</TabsTrigger>
            <TabsTrigger value="summarize">Text Summarizer</TabsTrigger>
            <TabsTrigger value="keywords">Keyword Analysis</TabsTrigger>
          </TabsList>
          
          <TabsContent value="content">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Content Topic</label>
                <Input 
                  value={contentTopic}
                  onChange={(e) => setContentTopic(e.target.value)}
                  placeholder="E.g., Benefits of responsive web design for small businesses"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">
                  Keywords (comma separated, optional)
                </label>
                <Input 
                  value={contentKeywords}
                  onChange={(e) => setContentKeywords(e.target.value)}
                  placeholder="E.g., responsive design, mobile-friendly, SEO benefits"
                />
              </div>
              
              <Button onClick={generateContent} disabled={isProcessing}>
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate Content'
                )}
              </Button>
              
              {generatedContent && (
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-medium">Generated Content:</h3>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => copyToClipboard(generatedContent)}>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => downloadAsText(generatedContent, contentTopic)}>
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => saveToDatabase(generatedContent, 'content')}>
                        <Save className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Title for Saving</label>
                    <Input 
                      value={contentTitle}
                      onChange={(e) => setContentTitle(e.target.value)}
                      placeholder="Enter a title for this content"
                      className="mb-2"
                    />
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md border overflow-auto max-h-[500px]">
                    <div className="whitespace-pre-wrap">{generatedContent}</div>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="summarize">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Text to Summarize</label>
                <Textarea 
                  value={textToSummarize}
                  onChange={(e) => setTextToSummarize(e.target.value)}
                  placeholder="Paste long text here to summarize"
                  rows={8}
                />
              </div>
              
              <Button onClick={summarizeText} disabled={isProcessing}>
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Summarizing...
                  </>
                ) : (
                  'Summarize Text'
                )}
              </Button>
              
              {summarizedText && (
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-medium">Summarized Text:</h3>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => copyToClipboard(summarizedText)}>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => downloadAsText(summarizedText, 'text-summary')}>
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md border">
                    <div className="whitespace-pre-wrap">{summarizedText}</div>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="keywords">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Topic for Keyword Analysis</label>
                <Input 
                  value={keywordTopic}
                  onChange={(e) => setKeywordTopic(e.target.value)}
                  placeholder="E.g., digital marketing for local businesses"
                />
              </div>
              
              <Button onClick={analyzeKeywords} disabled={isProcessing}>
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  'Analyze Keywords'
                )}
              </Button>
              
              {keywordAnalysis && (
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-medium">Keyword Analysis:</h3>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => copyToClipboard(keywordAnalysis)}>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => downloadAsText(keywordAnalysis, 'keyword-analysis')}>
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md border">
                    <div className="whitespace-pre-wrap">{keywordAnalysis}</div>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AIContentSuite;
