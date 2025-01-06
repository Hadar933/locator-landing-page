import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const Sitemap = () => {
  useEffect(() => {
    const redirectToSitemap = async () => {
      const { data: { origin } } = await supabase.functions.invoke('sitemap');
      window.location.href = origin;
    };
    
    redirectToSitemap();
  }, []);

  return null;
};

export default Sitemap;