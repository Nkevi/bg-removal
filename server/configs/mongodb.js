import mongoose from "mongoose";

export default async function connectDB() {
  mongoose.connection.on('connected', () => {
    console.log("Database Connected")
  })

  await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`)
}