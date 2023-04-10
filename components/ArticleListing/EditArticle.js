import React, { useEffect, useState } from "react";
import AddArticle from "@/components/dashboard/AddArticle";

function EditArticle({ id }) {
  const [article, setArticle] = useState({});
  useEffect(() => {
    const storedList = localStorage.getItem("articleList");
    setArticle(JSON.parse(storedList)[id - 1]);
  }, []);
  return <AddArticle {...article} id={id} />;
}

export default EditArticle;
