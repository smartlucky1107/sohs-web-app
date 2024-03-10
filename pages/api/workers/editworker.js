// pages/api/edit-worker.js

import Worker from "@/model/Worker";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectDB();

      // Get the posted data
      const { id, ...postData } = req.body;

      // Find the worker by unique identifier 'fin' and update with the posted data
      const updatedWorker = await Worker.findOneAndUpdate(
        { fin: id },
        postData,
        { new: true }
      );

      if (updatedWorker) {
        return res
          .status(200)
          .json({
            success: true,
            message: "Worker data updated successfully",
            data: updatedWorker,
          });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "Worker not found" });
      }
    } catch (error) {
      console.error("Error editing worker data:", error);
      return res
        .status(500)
        .json({ success: false, message: "Failed to update worker data" });
    }
  } else {
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }
}
