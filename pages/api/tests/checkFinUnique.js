// pages/api/tests/checkFinUnique.js

import Test from "@/model/Test";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectDB();

      const { fin, currentFin } = req.query;

      // Check if 'fin' value already exists in the database and not equal to a specific fin value
      const existingTest = await Test.findOne({ fin });

      existingTest !== null && existingTest.fin !== currentFin;

      if (existingTest && existingTest.fin == currentFin)
        return res.status(200).json({ isUnique: false });

      res.status(200).json({ isUnique: existingTest ? true : false });
    } catch (error) {
      console.error("Error checking fin uniqueness:", error);
      res.status(500).json({ error: "Failed to check fin uniqueness" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
