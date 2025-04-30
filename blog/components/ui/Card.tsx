import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { NicheBadge } from "./NicheBadge";

type CardVariant = "default" | "primary" | "secondary" | "dark";

interface CardProps {
  children?: ReactNode;
  title: string;
  content: string;
  nicheType?: "music" | "sports" | "tech";
  imageSrc?: string;
  imageAlt?: string;
  variant?: CardVariant;
  imagePosition?: "top" | "bottom" | "left" | "right";
  className?: string;
}

export const Card = ({
  children,
  title,
  content,
  nicheType,
  imageSrc,
  imageAlt = "Article image",
  variant = "default",
  imagePosition = "top",
  className = "",
}: CardProps) => {
  const variantClasses = {
    default: "bg-white",
    primary: "bg-teal-600 text-white",
    secondary: "bg-fuchsia-500 text-white",
    dark: "bg-black text-white",
  };
  
  const variantClass = variantClasses[variant];
  const hasImage = !!imageSrc;

  const renderCardContent = () => (
    <div className="p-4">
      {nicheType && <NicheBadge type={nicheType} />}
      <h3 className="text-xl font-bold mb-2 uppercase">
        <Link
          href="/article"
          className={variant !== "default" ? "text-white" : ""}
        >
          {title}
        </Link>
      </h3>
      <p className="my-2">{content}</p>
      {children}
    </div>
  );

  const renderImage = () =>
    imageSrc && (
      <div className="w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
    );

  return (
    <article className={`${variantClass} rounded-md overflow-hidden shadow-sm ${className} flex flex-col`}>
      {/* Image top position */}
      {imagePosition === "top" && hasImage && renderImage()}
      
      {/* Left image layout */}
      {imagePosition === "left" && hasImage ? (
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">{renderImage()}</div>
          <div className="w-full md:w-1/2">{renderCardContent()}</div>
        </div>
      ) : imagePosition === "right" && hasImage ? (
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">{renderCardContent()}</div>
          <div className="w-full md:w-1/2">{renderImage()}</div>
        </div>
      ) : (
        renderCardContent()
      )}
      
      {/* Image bottom position */}
      {imagePosition === "bottom" && hasImage && renderImage()}
    </article>
  );
};