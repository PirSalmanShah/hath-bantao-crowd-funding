import mongoose, { Schema,model } from "mongoose";

const UserSchema = new Schema(
    {
        name:{type:String},
        username:{type:String,required:true},
        email:{type:String,required:true},
        profilePic:{type:String},
        coverPic:{type:String},
        createdAt:{ type: Date, default: Date.now },
        updatedAT:{ type: Date, default: Date.now },
    }
)


export default mongoose.models.User || model("User",UserSchema);
