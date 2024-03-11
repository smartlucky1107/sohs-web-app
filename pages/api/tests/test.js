import Test from "@/model/Test";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectDB();

      const { fin } = req.query;

      if (fin) {
        // Check if 'fin' value already exists in the database
        const data = await Test.findOne({ fin: fin });

        res.status(200).json(data);
      }
    } catch (error) {
      console.error("Error checking fin uniqueness:", error);
      res.status(500).json({ error: "Failed to check fin uniqueness" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
