import Article from "@/models/Article";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  try {
    if (req.method !== "POST") {
      res.status(400).json({ error: "Not allowed" });
      return;
    }

    const updatedArticle = await Article.findByIdAndUpdate(
      req.body._id,
      req.body,
      {
        new: true, // Return the updated document
        runValidators: true, // Validate the updated document
      }
    );

    if (!updatedArticle) {
      res.status(404).json({ error: "Article not found" });
      return;
    }

    res.status(200).json({ message: "Success", article: updatedArticle });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default connectDb(handler);
