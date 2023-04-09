import Image from "next/image";
import { useState } from "react";

function AddArticle() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState();
  const [article, setArticle] = useState("");
  const [error, setError] = useState();

  const handleTitleChange = (e) => {
    setError();
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setError();
    setAuthor(e.target.value);
  };

  const handleTagsChange = (e) => {
    setError();
    setTags(e.target.value);
  };

  const handleArticleChange = (e) => {
    setError();
    setArticle(e.target.value);
  };

  const handleImageUpload = (e) => {
    setError();
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (title.length <= 3) {
      setError(0);
      return;
    }
    if (author.length <= 3) {
      setError(1);
      return;
    }
    if (tags.length <= 3) {
      setError(2);
      return;
    }
    if (image === undefined) {
      setError(3);
      return;
    }
    if (article.length <= 5) {
      setError(4);
      return;
    }
    setError();
  };
  return (
    <div className="flex justify-center p-5 px-10 lg:px-40 select-none">
      <div className="w-[100%]">
        <h1 className="text-2xl font-bold text-center mt-6 mb-4">
          Add new Article
        </h1>
        <div className="flex flex-col items-center">
          <div className="w-full flex flex-col my-2">
            <label
              htmlFor="title"
              className={`text-sm italic ${
                error === 0 && "text-red-500 font-medium"
              }`}
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className={`px-2 py-1 min-w-[300px] border-2 border-gray-400 ${
                error === 0 && "border-red-400"
              }`}
              placeholder="Title of article"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="w-full flex flex-col my-2">
            <label
              htmlFor="author"
              className={`text-sm italic ${
                error === 1 && "text-red-500 font-medium"
              }`}
            >
              Author Name
            </label>
            <input
              type="text"
              name="author"
              id="author"
              className={`px-2 py-1 min-w-[300px] border-2 border-gray-400 ${
                error === 1 && "border-red-400"
              }`}
              placeholder="John Cina"
              value={author}
              onChange={handleAuthorChange}
            />
          </div>
          <div className="w-full flex flex-col my-2">
            <label
              htmlFor="tag"
              className={`text-sm italic ${
                error === 2 && "text-red-500 font-medium"
              }`}
            >
              Tags <span className="text-xs italic">(Comma seperated)</span>
            </label>
            <input
              type="text"
              name="tag"
              id="tag"
              className={`px-2 py-1 min-w-[300px] border-2 border-gray-400 ${
                error === 2 && "border-red-400"
              }`}
              placeholder="Tag1, Tag2"
              value={tags}
              onChange={handleTagsChange}
            />
          </div>
          <div className="w-full flex flex-col my-2">
            <div className="flex items-end">
              <label
                htmlFor="upload"
                className={`text-sm italic mr-5 ${
                  error === 3 && "text-red-500 font-medium"
                }`}
              >
                Upload Image
              </label>
              {image && <Image src={image} alt="" width={100} height={50} />}
            </div>
            <input
              type="file"
              name="upload"
              id="upload"
              accept="image/*"
              className={`px-2 py-1 min-w-[300px] border-2 border-gray-400 ${
                error === 3 && "border-red-400"
              }`}
              onChange={handleImageUpload}
            />
          </div>
          <div className="w-full flex flex-col my-2">
            <label
              htmlFor="author"
              className={`text-sm italic ${
                error === 4 && "text-red-500 font-medium"
              }`}
            >
              Article
            </label>
            <textarea
              type="text"
              name="author"
              id="author"
              rows={20}
              className={`px-2 py-1 min-w-[300px] border-2 border-gray-400 ${
                error === 4 && "border-red-400"
              }`}
              placeholder="This article is awsome"
              value={article}
              onChange={handleArticleChange}
            />
          </div>
          <div>
            <button
              className="w-40 bg-blue-800 opacity-90 hover:opacity-100 duration-300 font-semibold hover:tracking-wide text-white p-2 rounded-sm cursor-pointer m-8"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddArticle;
