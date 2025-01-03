import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BlogCategory } from "@/content/blog/categories";

interface BlogCategoryCardProps {
  category: BlogCategory;
  index: number;
}

export const BlogCategoryCard = ({ category, index }: BlogCategoryCardProps) => {
  return (
    <motion.article
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle>
            <span className="mr-2">{category.flag}</span>
            {category.title}
          </CardTitle>
          <p className="text-muted-foreground">{category.description}</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {category.posts && category.posts.length > 0 && (
              <Link 
                to={`/blog/${category.slug}/${category.posts[0].slug}`}
                className="block p-4 rounded-lg hover:bg-accent transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2">{category.posts[0].title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{category.posts[0].excerpt}</p>
                <time dateTime={category.posts[0].date} className="text-sm text-muted-foreground">
                  {category.posts[0].date}
                </time>
              </Link>
            )}
            <Link to={`/blog/${category.slug}`}>
              <Button variant="secondary" className="w-full mt-4">
                See More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
};