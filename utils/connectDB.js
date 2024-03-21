import mongoose from "mongoose";

const connectDB = async () => {
  const connectionUrl =
  "mongodb+srv://tkteo:12345@cluster0.g7u7o6v.mongodb.net/sohs";
    // "mongodb+srv://karyna:yj19981107@cluster0.bvdzxs2.mongodb.net/sohs";
  mongoose
    .connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Database connected successfully`))
    .catch((err) =>
      console.log("Getting Error from DB connection" + err.message)
    );
  mongoose.set("strictQuery", false);
};

export default connectDB;

