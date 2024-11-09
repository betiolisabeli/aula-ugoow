import mongoose from "mongoose";

const { Schema } = mongoose;



const productSchema = new Schema(
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
            type: Number,
       }
        },
    {
        timestamps: true,
    }
);

export default mongoose.models.Product ||
    mongoose.model("Product", productSchema);
