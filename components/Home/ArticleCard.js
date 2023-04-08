import Image from "next/image";
import React, { useState } from "react";

function ArticleCard() {
  const [article, setArticle] = useState([
    {
      title: "1st Article",
      img: "/temp1.jpg",
      auther: "Hanish",
      date: "07-04-2023",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In diam augue, facilisis nec tincidunt sed, facilisis ut est. Nullam et leo lorem. Aliquam et lobortis neque, et efficitur risus. Suspendisse ipsum sem, gravida ac ligula et, efficitur facilisis erat. Cras auctor sapien eget est mattis, ac lobortis nisl pharetra. Ut scelerisque mi ut ipsum imperdiet euismod. In eget urna commodo, dictum tellus et, posuere felis. Phasellus vitae tempor libero. Proin ipsum dui, ullamcorper non tellus id, fermentum mattis justo. Etiam fermentum tellus a lorem suscipit, vel porta mi sodales. Proin nec venenatis risus, bibendum pretium nulla. Proin volutpat sapien eget odio eleifend bibendum. Aenean et lectus eget felis ullamcorper molestie nec ac dolor. Vestibulum ut pellentesque nisl.Aliquam fringilla pellentesque eros, eget vehicula quam gravida vel. In ut dolor imperdiet, accumsan libero non, hendrerit dolor. Suspendisse sodales egestas purus. Cras vel rhoncus felis, et viverra massa. Mauris facilisis felis mollis commodo congue. Nulla vitae mauris in lorem consequat hendrerit. Curabitur sodales rutrum leo at accumsan. Suspendisse a consectetur nisl. Aenean in ante dignissim, tincidunt nulla in, efficitur orci Vivamus consequat lacinia tellus id pellentesque. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed.",
    },
    {
      title: "2st Article",
      img: "/temp2.jpg",
      auther: "Jindal",
      date: "07-04-2023",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In diam augue, facilisis nec tincidunt sed, facilisis ut est. Nullam et leo lorem. Aliquam et lobortis neque, et efficitur risus. Suspendisse ipsum sem, gravida ac ligula et, efficitur facilisis erat. Cras auctor sapien eget est mattis, ac lobortis nisl pharetra. Ut scelerisque mi ut ipsum imperdiet euismod. In eget urna commodo, dictum tellus et, posuere felis. Phasellus vitae tempor libero. Proin ipsum dui, ullamcorper non tellus id, fermentum mattis justo. Etiam fermentum tellus a lorem suscipit, vel porta mi sodales. Proin nec venenatis risus, bibendum pretium nulla. Proin volutpat sapien eget odio eleifend bibendum. Aenean et lectus eget felis ullamcorper molestie nec ac dolor. Vestibulum ut pellentesque nisl.Aliquam fringilla pellentesque eros, eget vehicula quam gravida vel. In ut dolor imperdiet, accumsan libero non, hendrerit dolor. Suspendisse sodales egestas purus. Cras vel rhoncus felis, et viverra massa. Mauris facilisis felis mollis commodo congue. Nulla vitae mauris in lorem consequat hendrerit. Curabitur sodales rutrum leo at accumsan. Suspendisse a consectetur nisl. Aenean in ante dignissim, tincidunt nulla in, efficitur orci Vivamus consequat lacinia tellus id pellentesque. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed.",
    },
    {
      title: "1st Article",
      img: "/temp1.jpg",
      auther: "Hanish",
      date: "07-04-2023",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In diam augue, facilisis nec tincidunt sed, facilisis ut est. Nullam et leo lorem. Aliquam et lobortis neque, et efficitur risus. Suspendisse ipsum sem, gravida ac ligula et, efficitur facilisis erat. Cras auctor sapien eget est mattis, ac lobortis nisl pharetra. Ut scelerisque mi ut ipsum imperdiet euismod. In eget urna commodo, dictum tellus et, posuere felis. Phasellus vitae tempor libero. Proin ipsum dui, ullamcorper non tellus id, fermentum mattis justo. Etiam fermentum tellus a lorem suscipit, vel porta mi sodales. Proin nec venenatis risus, bibendum pretium nulla. Proin volutpat sapien eget odio eleifend bibendum. Aenean et lectus eget felis ullamcorper molestie nec ac dolor. Vestibulum ut pellentesque nisl.Aliquam fringilla pellentesque eros, eget vehicula quam gravida vel. In ut dolor imperdiet, accumsan libero non, hendrerit dolor. Suspendisse sodales egestas purus. Cras vel rhoncus felis, et viverra massa. Mauris facilisis felis mollis commodo congue. Nulla vitae mauris in lorem consequat hendrerit. Curabitur sodales rutrum leo at accumsan. Suspendisse a consectetur nisl. Aenean in ante dignissim, tincidunt nulla in, efficitur orci Vivamus consequat lacinia tellus id pellentesque. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed.",
    },
    {
      title: "1st Article",
      img: "/temp1.jpg",
      auther: "Hanish",
      date: "07-04-2023",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In diam augue, facilisis nec tincidunt sed, facilisis ut est. Nullam et leo lorem. Aliquam et lobortis neque, et efficitur risus. Suspendisse ipsum sem, gravida ac ligula et, efficitur facilisis erat. Cras auctor sapien eget est mattis, ac lobortis nisl pharetra. Ut scelerisque mi ut ipsum imperdiet euismod. In eget urna commodo, dictum tellus et, posuere felis. Phasellus vitae tempor libero. Proin ipsum dui, ullamcorper non tellus id, fermentum mattis justo. Etiam fermentum tellus a lorem suscipit, vel porta mi sodales. Proin nec venenatis risus, bibendum pretium nulla. Proin volutpat sapien eget odio eleifend bibendum. Aenean et lectus eget felis ullamcorper molestie nec ac dolor. Vestibulum ut pellentesque nisl.Aliquam fringilla pellentesque eros, eget vehicula quam gravida vel. In ut dolor imperdiet, accumsan libero non, hendrerit dolor. Suspendisse sodales egestas purus. Cras vel rhoncus felis, et viverra massa. Mauris facilisis felis mollis commodo congue. Nulla vitae mauris in lorem consequat hendrerit. Curabitur sodales rutrum leo at accumsan. Suspendisse a consectetur nisl. Aenean in ante dignissim, tincidunt nulla in, efficitur orci Vivamus consequat lacinia tellus id pellentesque. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed.",
    },
  ]);
  return (
    <div className="w-full select-none">
      <h1 className="w-full flex justify-center items-center mt-[40px] text-4xl font-semibold mb-[30px]">
        Articles
      </h1>
      <div className="m-auto grid centerGrid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[2vw] lg:px-[5vw]">
        {article.map((card, index) => {
          return (
            <div
              className="flex flex-col flex-wrap items-center w-[70vw] md:w-[40vw] lg:w-[26vw] p-[40px] mb-8 shadow-md hover:shadow-xl duration-300 shadow-gray-400"
              key={index}
            >
              <h1 className="text-2xl font-semibold">{card.title}</h1>
              <Image
                className="mt-3.5"
                src={card.img}
                alt=""
                width={300}
                height={100}
              />
              <div className="w-[95%] flex justify-between items-center mb-3.5">
                <span className="text-base font-serif">{card.auther}</span>
                <span className="text-xs">{card.date}</span>
              </div>
              <p className="text-justify">{card.body.substring(0, 200)}...</p>
              <div className="w-full mt-3.5">
                <button
                  className="bg-indigo-800 text-white
                px-4 py-2 rounded-md"
                >
                  Read more...
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ArticleCard;
