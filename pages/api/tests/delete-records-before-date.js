import Test from "@/model/Test";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectDB();

      const dateToDeleteBefore = new Date(req.query.date).toISOString();

      Test.deleteMany({ date_tested: { $lt: dateToDeleteBefore } })
        .then((result) => {
          return res.status(200).json({
            success: true,
            message: `${result.deletedCount} records deleted successfully.`,
          });
        })
        .catch((err) => {
          res.status(500).send("Error deleting records: " + err.message);
        });
    } catch (error) {
      console.error("Error deleting test data:", error);
      return res
        .status(500)
        .json({ success: false, message: "Failed to delete test data" });
    }
  } else {
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }
}
