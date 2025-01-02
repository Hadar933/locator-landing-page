import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogHeaderProps {
  title: string;
  publishDate: string;
}

export const BlogHeader = ({ title, publishDate }: BlogHeaderProps) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <Link to="/blog">
          <Button variant="ghost">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
        <a 
          href="https://locator.ltd" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary flex items-center gap-1"
        >
          Visit Locator <ExternalLink className="h-4 w-4" />
        </a>
      </div>
      
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <div className="mb-8 text-muted-foreground">
        <time dateTime={publishDate}>
          Published on {new Date(publishDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </div>
    </div>
  );
};