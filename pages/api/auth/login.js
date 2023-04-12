import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
import CryptoJS from "crypto-js";
var jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  try {
    if (req.method === "POST") {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
      const bytes = CryptoJS.AES.decrypt(
        user.password,
        process.env.SECRET_KEY,
        { expiredIn: "2d" }
      );
      const decryptedPass = bytes.toString(CryptoJS.enc.Utf8);
      if (req.body.password !== decryptedPass) {
        return res.status(401).json({ message: "Invalid password" });
      }
      var token = jwt.sign(
        { fullName: user.fullName, email: user.email },
        process.env.JWT_SECRET
      );
      res.status(200).json({ message: "Logged in", token });
    } else {
      res.status(400).json({ message: "Not allowed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default connectDb(handler);
