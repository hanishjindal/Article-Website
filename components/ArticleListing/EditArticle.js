import React, { useEffect, useState } from "react";
import AddArticle from "@/components/dashboard/AddArticle";

function EditArticle({ id }) {
  const [article, setArticle] = useState({});
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
  return <AddArticle {...article} id={id} />;
}

export default EditArticle;
