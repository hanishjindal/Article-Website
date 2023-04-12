import Article from "@/models/Article";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  try {
    if ((req.method = "POST")) {
      let art = new Article({
        title: req.body.title,
        tags: req.body.tags,
        image: req.body.image,
        article: req.body.article,
      });
      await art.save();
      res.status(200).json({ message: "Success", id: art.id });
    } else {
      res.status(400).json({ error: "Not allowed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

export default connectDb(handler);
