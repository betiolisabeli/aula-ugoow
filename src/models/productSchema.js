import mongoose from "mongoose";

const { Schema } = mongoose;



const ProductSchema = new Schema(
    {
        id: Schema.Types.ObjectId,
        name: {
            type: String,
            required: true,
        },
        price: {
             type: String,
        },
        Amount: {
            type: String,
       }
        },
    {
        timestamps: true,
    }
);

export default mongoose.models.User ||
    mongoose.model("Product", userSchema);
