import mongoose from "mongoose";

const taxeSchema = new mongoose.Schema(
  {
    order_id: { type: String, required: true },
    platform_code: { type: String, required: true },
    order_amount: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Taxes =
  mongoose.models.Tax ?? mongoose.model("Tax", taxeSchema);
export default Taxes;
