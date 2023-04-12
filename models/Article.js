const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    authorid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    date: { type: Date, default: Date.now },
    tags: { type: Array, required: true },
    image: { type: String, required: true },
    article: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Article ||
  mongoose.model("Article", articleSchema);
