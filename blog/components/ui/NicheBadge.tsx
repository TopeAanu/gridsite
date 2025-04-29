interface NicheBadgeProps {
  type: "music" | "sports" | "tech";
  className?: string;
}

export const NicheBadge = ({ type, className = "" }: NicheBadgeProps) => {
  const baseClasses =
    "inline-block text-white text-xs uppercase px-2 py-1 rounded-2xl mb-1 text-center border-none";

  const typeClasses = {
    music: "bg-fuchsia-500",
    sports: "bg-teal-600",
    tech: "bg-orange-500",
  };

  return (
    <span className={`${baseClasses} ${typeClasses[type]} ${className}`}>
      {type === "tech" ? "Technology" : type === "sports" ? "Sports" : "Music"}
    </span>
  );
};
