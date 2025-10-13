import mongoose from "mongoose";

const { connection } = mongoose;

// 🔹 Connection event listeners
connection.on("connected", () => console.log("🟢 MongoDB connected"));
connection.on("open", () => console.log("📂 MongoDB connection opened"));
connection.on("disconnected", () => console.log("🔴 MongoDB disconnected"));
connection.on("reconnected", () => console.log("🟡 MongoDB reconnected"));
connection.on("disconnecting", () => console.log("🟠 MongoDB disconnecting"));
connection.on("close", () => console.log("⚪ MongoDB connection closed"));

// 🔹 Database Connection Function
const dbconnection = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("✅ Database connected successfully");
    })
    .catch((err) => {
      console.error("❌ Database connection failed:", err.message);
      process.exit(1); // optional but recommended for server stability
    });
};

export default dbconnection;
