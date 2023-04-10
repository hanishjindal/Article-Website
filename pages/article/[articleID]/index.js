import ViewArticle from "@/components/ArticleListing/ViewArticle";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function ArticleDetail() {
  const router = useRouter();
  const [article, setArticle] = useState([]);
  const id = Number(router.query.articleID);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (article) {
        clearInterval(intervalId);
      }

      const articleList = JSON.parse(localStorage.getItem("articleList"));
      const temp = articleList[id - 1] || {};
      setArticle(temp);
    }, 200);

    return () => {
      clearInterval(intervalId);
    };
  }, [article]);

  return (
    <div>
      <ViewArticle
        title={article.title}
        author={article.author}
        date={article.date}
        tags={article.tags}
        image={article.image}
        article={article.content}
      />
    </div>
  );
}

export default ArticleDetail;
