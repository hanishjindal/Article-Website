import Image from "next/image";
import React from "react";
import ReactHtmlParser from "react-html-parser";

function ViewArticle({ title, author, date, tags, image, article }) {
  return (
    <div className="flex flex-col mt-10 items-center min-h-[60vh]">
      <div className="flex flex-col items-center">
        <h1 className="w-[80vw] text-5xl mt-8">{title}</h1>
        <div className="w-[80vw] text-sm mt-1">
          {date} {!title ? "Loading...." : "by"}{" "}
          <span className="italic">{author}</span>
        </div>
        <div className="flex w-[80vw] my-1">
          {tags &&
            tags.map((tag, index) => {
              return (
                <div
                  key={index}
                  className="px-2 text-sm mx-1 rounded-sm bg-gray-200 border-2 border-gray-300 cursor-pointer"
                >
                  {tag}
                </div>
              );
            })}
        </div>
        {image && (
          <Image
            className="w-[60vw] object-cover border-2 mt-2 h-auto"
            src={image}
            alt=""
            width={400}
            height={200}
          />
        )}
        <div className="w-[80vw] my-5 mb-10">
          {article &&
            article.split("\n").map((line, index) => (
              <div key={index} className="text-justify">
                {ReactHtmlParser(line)}
                <br />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ViewArticle;
