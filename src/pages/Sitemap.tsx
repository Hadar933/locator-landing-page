import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const Sitemap = () => {
  useEffect(() => {
    const redirectToSitemap = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('sitemap');
        if (error) {
          console.error('Error fetching sitemap:', error);
          return;
        }
        window.location.href = `${window.location.origin}/functions/v1/sitemap`;
      } catch (error) {
        console.error('Error redirecting to sitemap:', error);
      }
    };
    
    redirectToSitemap();
  }, []);

  return null;
};

export default Sitemap;