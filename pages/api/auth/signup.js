import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  try {
    const { fullName, email, password, confirmPassword } = req.body;
    if (!isValidEmail(email)) {
      res.status(400).json({ error: "Invalid email" });
      return;
    }
    if (password !== confirmPassword) {
      res.status(400).json({ error: "Passwords do not match" });
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
      const result = await collection.insertOne({ fullName, email, password });
      res.status(201).json({ message: "User created", id: result.insertedId });
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
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
