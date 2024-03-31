import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Mandal:20040917@cluster999.tcjq1nb.mongodb.net/foodDelivery?retryWrites=true&w=majority"
      // "https://fd-1-dscg.onrender.com"
    );
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed");
  }
};
