import Showcase from "../components/sections/Showcase";
import { HomeArticles } from "../components/sections/HomeArticles";
import { TechShowcase } from "../components/sections/TechShowcase";
import { getFeaturedArticles, getMonthlyArticles } from "../data/articles";

export default function Home() {
  const featuredArticles = getFeaturedArticles();
  const monthlyArticles = getMonthlyArticles();

  return (
    <>
      <Showcase
        title="Music Articles"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laudantium impedit accusamus expedita, ipsam nulla distinctio veritatis, maiores laborum obcaecati repudiandae, consequuntur at harum iure ut assumenda officia voluptatem. Hic."
        bgImage="/music-showcase.jpg"
        btnText="Read More"
        btnLink="/article"
        // category="music"
      />
      <section id="home-articles-2" className="py-2">
        <div className="container">
          <h2>Featured Articles</h2>
          <HomeArticles articles={featuredArticles} variant="featured" />
        </div>
      </section>
      <TechShowcase
        title="Tech Articles"
        niche="tech"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias laudantium impedit accusamus expedita, ipsam nulla distinctio veritatis, maiores laborum obcaecati repudiandae, consequuntur at harum iure ut assumenda officia voluptatem. Hic."
        buttonText="Read More"
        buttonLink="/article"
      />
      <section id="home-articles" className="py-2">
        <div className="container">
          <h2>This Month</h2>
          <HomeArticles articles={monthlyArticles} variant="monthly" />
        </div>
      </section>
    </>
  );
}
