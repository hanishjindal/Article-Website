import Article from "@/models/Article";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  try {
    let articles = await Article.find();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default connectDb(handler);
