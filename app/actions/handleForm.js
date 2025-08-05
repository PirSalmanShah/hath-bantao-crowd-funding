"use server"
import mongoose from "mongoose"

import User from "../models/User";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route.js";
try {
  await mongoose.connect(process.env.MONGODB_URI);
} catch (error) {
  throw new Error("Database connection failed");
}

export const SubmitForm = async(e)=>{
    const session = await getServerSession(authOptions)
    // const UserEmail = session.email
    const update ={username:e.get("newUserName"),updatedAT:Date.now(),}
    if(e.get("newProfilePic")!="null"){
        update.profilePic=e.get("newProfilePic")
    }
    if(e.get("newCoverPic")!="null"){
        update.coverPic=e.get("newCoverPic")
    }
    await User.findOneAndUpdate({email:session.user.email},update)
    
    
}