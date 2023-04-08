import React from "react";
import ArticleCard from "../Home/ArticleCard";

function dashboard() {
  return (
    <div>
      <ArticleCard title="Your Articles" owner={true} />
    </div>
  );
}

export default dashboard;
