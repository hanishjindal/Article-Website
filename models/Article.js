const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    date: { type: Date, default: Date.now },
    tags: { type: Array, required: true },
    image: { type: String, required: true },
    article: { type: String, required: true },
  },
  { timestamps: true }
);

mongoose.models = {};
export default mongoose.model("Article", articleSchema);
