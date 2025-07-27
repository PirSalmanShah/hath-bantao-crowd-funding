import mongoose from "mongoose";
// import { NextResponse } from "next/server";
import Payment from "@/app/models/Payment";
try {
  await mongoose.connect(process.env.MONGODB_URI);
} catch (error) {
  throw new Error("Database connection failed");
}
export async function GET() {
    const list = await Payment.find({}, { name: 1, amount: 1 ,message: 1}).sort({createdAt:-1})
    console.log(list)
    return new Response(JSON.stringify(list))
}

