import Worker from "@/model/Worker";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // Ensure data is not empty
    if (!data) {
      return res.status(400).json({ error: "Data is required" });
    }

    try {
      await connectDB();

      data.map(async (data) => {
        // Check if 'fin' value already exists
        const existingWorker = await Worker.findOne({ fin: data.fin });
        if (!existingWorker) {
          // Create a new worker using the Worker schema
          const newWorker = new Worker(data);

          // Save the new worker to the database
          const savedWorker = await newWorker.save();
        }
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      // console.error("Error:", error.message); // Log the specific error message
      return res.status(500).json({ error: "Failed to store data" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
