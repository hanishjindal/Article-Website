import ViewArticle from "@/components/ArticleListing/ViewArticle";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

function ArticleDetail() {
  const router = useRouter();
  const id = Number(router.query.articleID);
  const articleList = useMemo(
    () => JSON.parse(localStorage.getItem("articleList")) || [],
    []
  );
  const article = articleList[id - 1] || {};
  const { title, author, tags = [], image, date, article: content } = article;

  return (
    <div>
      <ViewArticle
        title={title}
        author={author}
        date={date}
        tags={tags}
        image={image}
        article={content}
      />
    </div>
  );
}

export default ArticleDetail;
