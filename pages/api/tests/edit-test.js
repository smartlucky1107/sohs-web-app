import Test from "@/model/Test";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectDB();

      // Get the posted data
      const { id, ...testData } = req.body;

      // Find the test by unique identifier 'fin' and update with the posted data
      const updatedTest = await Test.findOneAndUpdate({ fin: id }, testData, {
        new: true,
      });

      if (updatedTest) {
        return res.status(200).json({
          success: true,
          message: "Test data updated successfully",
          data: updatedTest,
        });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "Test not found" });
      }
    } catch (error) {
      console.error("Error editing test data:", error);
      return res
        .status(500)
        .json({ success: false, message: "Failed to update test data" });
    }
  } else {
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }
}
