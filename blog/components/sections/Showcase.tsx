import { Button } from "../ui/Button";

interface ShowcaseProps {
  title: string;
  content: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  nicheType?: "music" | "sports" | "tech";
}

export const Showcase = ({
  title,
  content,
  buttonText = "Read More",
  buttonLink = "/article",
  backgroundImage = "/img/music-showcase.jpg",
}: ShowcaseProps) => {
  return (
    <header className="relative text-white bg-black py-8">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 opacity-50 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="container max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center h-[50vh]">
          <div className="z-10">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="mb-4">{content}</p>
            <Button variant="primary" href={buttonLink}>
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
