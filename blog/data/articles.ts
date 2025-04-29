import { Article, NicheType } from "../types";

export const articles: Article[] = [
  {
    id: "1",
    title: "Lorem ipsum dolor sit amet",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab modi unde quis iusto nulla corrupti iure aut obcaecati similique quos.",
    niche: "tech",
    date: "2025-04-15",
    variant: "primary",
    featured: true,
  },
  {
    id: "2",
    title: "Lorem ipsum dolor sit amet",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab modi unde quis iusto nulla corrupti iure aut obcaecati similique quos.",
    niche: "sports",
    date: "2025-04-14",
    imageUrl: "/sports2.jpg",
    featured: true,
  },
  {
    id: "3",
    title: "Lorem ipsum dolor sit amet",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab modi unde quis iusto nulla corrupti iure aut obcaecati similique quos.",
    niche: "music",
    date: "2025-04-13",
    imageUrl: "/music5.jpg",
  },
  {
    id: "4",
    title: "Lorem ipsum dolor sit amet",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab modi unde quis iusto nulla corrupti iure aut obcaecati similique quos.",
    niche: "tech",
    date: "2025-04-12",
    imageUrl: "/tech2.jpg",
    imagePosition: "right",
  },
  {
    id: "5",
    title: "Lorem ipsum dolor sit amet",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab modi unde quis iusto nulla corrupti iure aut obcaecati similique quos.",
    niche: "sports",
    date: "2025-04-11",
    imageUrl: "/sports1.jpg",
  },
  {
    id: "6",
    title: "Lorem ipsum dolor sit amet",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab modi unde quis iusto nulla corrupti iure aut obcaecati similique quos.",
    niche: "tech",
    date: "2025-04-10",
    variant: "secondary",
  },
  {
    id: "7",
    title: "Lorem ipsum dolor sit amet",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab modi unde quis iusto nulla corrupti iure aut obcaecati similique quos.",
    niche: "music",
    date: "2025-04-09",
    imageUrl: "/music7.jpg",
  },
  {
    id: "8",
    title: "Lorem ipsum dolor sit amet",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab modi unde quis iusto nulla",
    niche: "tech",
    date: "2025-04-08",
    variant: "primary",
    featured: true,
  },
  {
    id: "9",
    title: "Lorem ipsum dolor sit amet",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab modi unde quis iusto nulla",
    niche: "sports",
    date: "2025-04-07",
    imageUrl: "/sports4.jpg",
    featured: true,
  },
  {
    id: "10",
    title: "Lorem ipsum dolor sit amet",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab modi unde quis iusto nulla",
    niche: "music",
    date: "2025-04-06",
    featured: true,
  },
  {
    id: "11",
    title: "Lorem ipsum dolor sit amet",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab modi unde quis iusto nulla",
    niche: "tech",
    date: "2025-04-05",
    imageUrl: "/tech5.jpg",
    imagePosition: "right",
    featured: true,
  },
  {
    id: "12",
    title: "Lorem ipsum dolor sit amet",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab modi unde quis iusto nulla",
    niche: "sports",
    date: "2025-04-04",
    featured: true,
  },
  {
    id: "13",
    title: "Lorem ipsum dolor sit amet",
    excerpt:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab modi unde quis iusto nulla",
    niche: "music",
    date: "2025-04-03",
    variant: "primary",
    featured: true,
  },
];

export const getFeaturedArticles = (): Article[] =>
  articles.filter((article) => article.featured);

export const getArticlesByNiche = (niche: NicheType): Article[] =>
  articles.filter((article) => article.niche === niche);

export const getMonthlyArticles = (): Article[] => articles.slice(0, 7);
