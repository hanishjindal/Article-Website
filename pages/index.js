import ArticleCard from "@/components/Home/ArticleCard";
import Slider from "@/components/Home/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Slider />
      <ArticleCard title="Top Articles" />
    </main>
  );
}
