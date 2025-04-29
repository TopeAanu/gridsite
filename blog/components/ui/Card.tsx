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
    <div>
      {nicheType && <NicheBadge type={nicheType} />}
      <h3 className="text-xl font-bold mb-2">
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
      <div>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={300}
          className="w-full rounded-md"
        />
      </div>
    );

  return (
    <article className={`${variantClass} p-4 rounded-md ${className}`}>
      {imagePosition === "top" && renderImage()}

      {imagePosition === "left" && (
        <div className="grid grid-cols-2 gap-4">
          {renderImage()}
          {renderCardContent()}
        </div>
      )}

      {imagePosition === "right" && (
        <div className="grid grid-cols-2 gap-4">
          {renderCardContent()}
          {renderImage()}
        </div>
      )}

      {(imagePosition === "top" || imagePosition === "bottom" || !hasImage) &&
        renderCardContent()}

      {imagePosition === "bottom" && renderImage()}
    </article>
  );
};
