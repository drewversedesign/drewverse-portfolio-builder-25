
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// Get the API key from environment variable
const AI_API_KEY = Deno.env.get("AI_API_KEY");

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt, url, action, content, keywords } = await req.json();
    
    if (!prompt && !content && !keywords && action !== 'generate_content') {
      return new Response(
        JSON.stringify({ error: "Missing required parameters" }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (!AI_API_KEY) {
      return new Response(
        JSON.stringify({ error: "AI API key not configured" }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Processing request: ${action || 'SEO analysis'} for ${url || 'content'}`);
    
    let systemPrompt = "You are a helpful AI assistant.";
    let userPrompt = prompt || "";
    
    // Configure the prompt based on the requested action
    switch (action) {
      case "generate_content":
        systemPrompt = "You are an expert content writer specializing in digital marketing and SEO-optimized content. Create engaging, informative content that follows best practices for readability and search engine optimization.";
        userPrompt = `Generate SEO-optimized content for the following topic: ${prompt}. Include appropriate headings, paragraphs, and incorporate these keywords naturally if provided: ${keywords || 'No specific keywords provided'}`;
        break;
      
      case "summarize_text":
        systemPrompt = "You are an expert at summarizing content while preserving key information and main points.";
        userPrompt = `Summarize the following content in a concise way that retains the main points and key information: ${content}`;
        break;
      
      case "keyword_analysis":
        systemPrompt = "You are an SEO and keyword research expert. Analyze topics and identify valuable keywords for content optimization.";
        userPrompt = `Analyze the following topic or content and provide a list of primary and secondary keywords that would be valuable for SEO: ${prompt || content}. For each keyword, include a brief explanation of its relevance and search potential.`;
        break;
      
      default: // SEO analysis (existing functionality)
        systemPrompt = "You are an SEO expert specialized in website analysis and optimization.";
        userPrompt = prompt;
    }
    
    // Call DeepSeek AI API
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AI_API_KEY}`
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("AI API Error:", errorData);
      throw new Error(`AI API returned ${response.status}: ${errorData}`);
    }

    const data = await response.json();
    const result = data.choices[0].message.content;

    return new Response(
      JSON.stringify({ result, url, action }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error("Error in AI helper function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
