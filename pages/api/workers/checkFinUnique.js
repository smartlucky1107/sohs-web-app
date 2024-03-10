// pages/api/workers/checkFinUnique.js

import Worker from "@/model/Worker";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectDB();

      const { fin } = req.query;

      // Check if 'fin' value already exists in the database
      const existingWorker = await Worker.findOne({ fin });

      res.status(200).json({ isUnique: !existingWorker });
    } catch (error) {
      console.error("Error checking fin uniqueness:", error);
      res.status(500).json({ error: "Failed to check fin uniqueness" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
