"use server"
import mongoose from "mongoose"
import Payment from "../models/Payment";
try {
  await mongoose.connect(process.env.MONGODB_URI);
} catch (error) {
  throw new Error("Database connection failed");
}

export  const handlePayment = async(name,amount,message)=>{
    const update = {name:name,amount:amount,createdAt:Date.now(),done:true,message:message}
    await Payment.create(update)
}