import Test from "@/model/Test";
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
        const existingTest = await Test.findOne({ fin: data.fin });
        if (!existingTest) {
          // Create a new test using the Test schema
          const newTest = new Test(data);

          // Save the new test to the database
          const savedTest = await newTest.save();
        }
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error:", error.message); // Log the specific error message
      return res.status(500).json({ error: "Failed to store data" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
