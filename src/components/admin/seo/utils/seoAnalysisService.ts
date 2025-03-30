
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export const saveReport = async (url: string, analysis: string) => {
  try {
    const { error } = await supabase
      .from('seo_reports')
      .insert([{ url, analysis }]);
      
    if (error) throw error;
  } catch (error) {
    console.error('Error saving report:', error);
    toast.error('Failed to save report');
  }
};
