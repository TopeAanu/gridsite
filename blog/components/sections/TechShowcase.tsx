import { Button } from "../ui/Button";
import { NicheBadge } from "../ui/NicheBadge";

interface TechShowcaseProps {
  title: string;
  content: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  niche: string;
}

export const TechShowcase = ({
  title,
  content,
  buttonText = "Read More",
  buttonLink = "/article",
  backgroundImage = "/img/tech-showcase.jpg",
}: TechShowcaseProps) => {
  return (
    <section className="relative">
      <div className="container max-w-6xl mx-auto px-8">
        <div className="relative text-white bg-black py-8">
          {/* Background image with overlay */}
          <div
            className="absolute inset-0 opacity-40 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center h-[50vh]">
            <div className="z-10">
              <NicheBadge type="tech" />
              <h1 className="text-4xl font-bold mb-4">{title}</h1>
              <p className="mb-4">{content}</p>
              <Button variant="primary" href={buttonLink}>
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
