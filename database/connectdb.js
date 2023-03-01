import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.URI_MONGO);
  console.log("connect DB ok 👋");
} catch (error) {
  console.log("connection error to mongodb ⚠️" + error);
}
