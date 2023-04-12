import Article from "@/models/Article";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  try {
    if (req.method === "POST") {
      const { _id } = req.body;
      if (!_id) {
        throw new Error("Article ID is required");
      }

      const deletedArticle = await Article.findByIdAndDelete(_id);
      if (!deletedArticle) {
        throw new Error("Article not found");
      }

      res.status(200).json({ message: "Successfully deleted" });
    } else {
      res.status(400).json({ error: "Not allowed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export default connectDb(handler);
