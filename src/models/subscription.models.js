import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, // one who subscribing
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId, // one to who whom 'subscriber' is subscriber
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
