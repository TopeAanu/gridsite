import Link from "next/link";

interface ShowcaseProps {
  title: string;
  description: string;
  bgImage: string;
  btnText: string;
  btnLink: string;
  category?: "technology" | "music" | "sports";
}

const Showcase = ({
  title,
  description,
  bgImage,
  btnText,
  btnLink,
  category,
}: ShowcaseProps) => {
  const categoryClass = category
    ? category === "technology"
      ? "bg-orange-500"
      : category === "music"
      ? "bg-fuchsia-500"
      : "bg-teal-600"
    : "";
  return (
    <div className="relative bg-black text-white py-12 md:py-16">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center min-h-[50vh] py-8 md:py-0">
          <div className="mb-8 md:mb-0">
            {category && (
              <span
                className={`${categoryClass} text-white text-xs uppercase px-2 py-1 rounded-full mb-2 inline-block`}
              >
                {category}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-staatliches mb-4">
              {title}
            </h1>
            <p className="text-base md:text-lg mb-6">{description}</p>
            <Link
              href={btnLink}
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded transition"
            >
              {btnText}
            </Link>
          </div>
          <div className="hidden md:block">
            {/* Second column can be used for additional content */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
