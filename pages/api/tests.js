import Test from "@/model/Test";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectDB();

      const { name, fin, company_address } = req.query;
      let query = {};

      // Build the query based on the provided parameters
      if (name) {
        query.name = { $regex: name, $options: "i" };
      }
      if (fin) {
        query.fin = { $regex: fin, $options: "i" };
      }
      if (company_address) {
        query.company_address = { $regex: company_address, $options: "i" };
      }

      // Find documents that match the query
      const data = await Test.find(query);

      return res.status(200).json({ success: true, data: data });
    } catch (error) {
      console.error("Error:", error.message); // Log the specific error message
      return res.status(500).json({ error: "Failed to fetch data" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
