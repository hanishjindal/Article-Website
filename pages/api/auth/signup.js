import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
import { AES } from "crypto-js";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { fullName, email, password } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        res.status(400).json({ error: "User with this email already exists" });
        return;
      }
      const user = new User({
        fullName,
        email,
        password: AES.encrypt(password, process.env.SECRET_KEY).toString(),
      });
      await user.save();
      res.status(200).json({ message: "User Created", id: user.id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  } else {
    res.status(400).json({ error: "Not allowed" });
  }
};

export default connectDb(handler);
