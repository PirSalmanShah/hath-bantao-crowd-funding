import mongoose,{Schema,model} from "mongoose";

const PaymentSchema = new Schema({
    name:{type:String,required:true},
    amount:{type:String,required:true},
    message:{type:String},
    createdAt:{ type: Date, default: Date.now },
    
    done:{ type: Boolean, default: false },
})


export default mongoose.models.Payment || model("Payment",PaymentSchema)