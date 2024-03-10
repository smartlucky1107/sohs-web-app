import Worker from "@/model/Worker";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectDB();

      // Fetch all workers from the database
      const workers = await Worker.find();

      return res.status(200).json({ success: true, data: workers });
    } catch (error) {
      console.error("Error:", error.message); // Log the specific error message
      return res.status(500).json({ error: "Failed to fetch data" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
