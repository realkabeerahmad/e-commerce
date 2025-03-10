import mongoose from "mongoose";

const StoreSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    description: {
      type: String,
    },
    address:{
        street:{type:String},
        city:{type:String},
        state:{type:String},
        country:{type:String},
        zipCode:{type:String},
    },
    phone:{
        type:String
    },
    email:{
        type:String
    },
    totalSales: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

export const storeModel = mongoose.model("Store", StoreSchema);
