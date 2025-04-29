import { Card } from "../ui/Card";
import { Article as ArticleData } from "../../types"; // Import from your types file

// Create an adapter interface that maps your data articles to the component's expected format
interface CardArticle {
  id: string;
  title: string;
  content: string;
  nicheType: "music" | "sports" | "tech";
  imageSrc?: string;
  variant?: "default" | "primary" | "secondary" | "dark";
  imagePosition?: "top" | "bottom" | "left" | "right";
}

interface HomeArticlesProps {
  title?: string; // Make title optional since it's not always provided in your Home component
  articles: ArticleData[]; // Use your actual Article type from data/articles
  variant?: "primary" | "secondary" | "featured" | "monthly"; // Add the new variants
}

export const HomeArticles = ({
  title,
  articles,
  variant = "primary",
}: HomeArticlesProps) => {
  // Map your articles data to the format expected by Card component
  const mappedArticles: CardArticle[] = articles.map((article) => ({
    id: article.id,
    title: article.title,
    content: article.excerpt, // Map excerpt to content
    nicheType: article.niche as "music" | "sports" | "tech", // Map niche to nicheType
    imageSrc: article.imageUrl, // Map imageUrl to imageSrc
    variant: article.variant as
      | "default"
      | "primary"
      | "secondary"
      | "dark"
      | undefined,
    imagePosition: article.imagePosition as
      | "top"
      | "bottom"
      | "left"
      | "right"
      | undefined,
  }));

  // Determine the grid layout based on the variant
  const getGridClasses = () => {
    switch (variant) {
      case "featured":
      case "secondary":
        return "md:grid-cols-4";
      case "monthly":
      case "primary":
      default:
        return "md:grid-cols-3";
    }
  };

  return (
    <section className="py-8">
      <div className="container max-w-6xl mx-auto px-8">
        {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}

        <div className={`grid grid-cols-1 gap-4 ${getGridClasses()}`}>
          {mappedArticles.map((article, index) => {
            // Special layout for article at specific positions
            let specialClasses = "";

            if (variant === "primary" || variant === "monthly") {
              // For primary layout (This Month section)
              if (index === 1 || index === 6) {
                specialClasses = "md:col-span-2";
              }
            } else {
              // For secondary/featured layout (Featured Articles section)
              if (index === 1 || index === 3) {
                specialClasses =
                  index === 1
                    ? "md:col-span-2"
                    : "md:col-start-1 md:col-span-2";
              }
            }

            // For the large spanning article in primary layout
            const isWideArticle =
              (variant === "primary" || variant === "monthly") && index === 6;

            return (
              <Card
                key={article.id}
                title={article.title}
                content={article.content}
                nicheType={article.nicheType}
                imageSrc={article.imageSrc}
                variant={article.variant}
                imagePosition={article.imagePosition}
                className={specialClasses}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
