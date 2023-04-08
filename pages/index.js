import ArticleCard from "@/components/Home/ArticleCard";
import Slider from "@/components/Home/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Slider />
      <ArticleCard />
    </main>
  );
}
