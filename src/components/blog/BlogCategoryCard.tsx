import { Link } from "react-router-dom";
import { BlogCategory } from "@/content/blog/categories";
import { posts } from "@/content/blog/posts";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface BlogCategoryCardProps {
  category: BlogCategory;
}

export const BlogCategoryCard = ({ category }: BlogCategoryCardProps) => {
  // Find the first post in this category to use its image
  const firstPost = Object.values(posts).find(
    post => post.category === category.name
  );

  const defaultImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b";

  return (
    <Link
      to={`/blog/category/${category.slug}`}
      className="block overflow-hidden rounded-lg hover:bg-accent/50 transition-all"
    >
      <div className="relative">
        <AspectRatio ratio={16/9}>
          <img
            src={firstPost?.image || defaultImage}
            alt={category.name}
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
          <p className="text-muted-foreground">{category.description}</p>
        </div>
      </div>
    </Link>
  );
};