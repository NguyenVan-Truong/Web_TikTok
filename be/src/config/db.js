import mongoose from "mongoose";

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("Kết nối MongoDB thành công");
  } catch (error) {
    console.log("Lỗi kết nối MongoDB:", error.message);
  }
};

export default connectDB;
