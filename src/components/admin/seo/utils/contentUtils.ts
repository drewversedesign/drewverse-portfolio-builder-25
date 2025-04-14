
export const formatDate = (dateString: string) => {
  try {
    return new Date(dateString).toLocaleString();
  } catch (error) {
    console.error('Date formatting error:', error);
    return dateString || 'N/A';
  }
};

export const getContentTypeLabel = (type: string) => {
  switch (type) {
    case 'content': return 'Generated Content';
    case 'summary': return 'Text Summary';
    case 'keywords': return 'Keyword Analysis';
    default: return type;
  }
};

export const exportContentData = (contents: any[]) => {
  try {
    // Create a data blob with all content
    const contentData = contents.map(item => ({
      id: item.id,
      title: item.title,
      type: item.type,
      created_at: formatDate(item.created_at),
      content: item.content
    }));
    
    const dataStr = JSON.stringify(contentData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    // Create download link
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'content-export.json';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    return true;
  } catch (error) {
    console.error('Error exporting content:', error);
    return false;
  }
};
