import Article from "@/models/Article";
import User from "@/models/User";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  try {
    if (req.method === "POST") {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
      const article = new Article({
        title: req.body.title,
        authorid: user._id,
        tags: req.body.tags,
        image: req.body.image,
        article: req.body.article,
      });
      await article.save();
      res.status(200).json({ message: "Success", id: article._id });
    } else {
      res.status(400).json({ error: "Not allowed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

export default connectDb(handler);
