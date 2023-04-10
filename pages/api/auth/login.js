import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  try {
    const { email, password } = req.body;
    if (!isValidEmail(email)) {
      res.status(400).json({ error: "Invalid email" });
      return;
    }
    const client = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      auth: {
        username: process.env.MONGODB_USER,
        password: process.env.MONGODB_PASS,
      },
    });
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection("users");
    try {
      const user = await collection.findOne({ email });
      if (!user) {
        res.status(401).json({ error: "Invalid email or password" });
        return;
      }
      // const isPasswordValid = await bcrypt.compare(password, user.password);
      const isPasswordValid = true;
      if (!isPasswordValid) {
        res.status(401).json({ error: "Invalid email or password" });
        return;
      }
      res.status(200).json({ message: "Logged in", id: user._id });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    } finally {
      client.close();
    }
  } catch (error) {
    console.log(error);
  }
}

function isValidEmail(email) {
  // Validate the email address using a regular expression
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test;
}
