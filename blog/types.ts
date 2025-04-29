export type NicheType = "music" | "sports" | "tech";
export type CardVariant = "default" | "primary" | "secondary" | "dark";
export type ImagePosition = "top" | "bottom" | "left" | "right";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  imageUrl?: string;
  niche: NicheType;
  date: string;
  variant?: CardVariant;
  imagePosition?: ImagePosition;
  featured?: boolean;
}
