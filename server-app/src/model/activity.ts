import mongoose from "mongoose";

const ActivitySchema = new mongoose.Schema(
    {
        service: {
            type: String,
            required: true, // Make it required instead of unique
            index: true, // Improve query performance
        },
        description: {
            type: String,
            default: "",
        },
        reqIp: {
            type: String,
            required: true,
        },
        reqDtime: {
            type: Date,
            default: Date.now, // Ensure it gets the actual time when created
        },
        reqStartTime: {
            type: Date,
            required: true,
        },
        reqEndTime: {
            type: Date,
            required: true,
        },
        durationMs: {
            type: Number,
        },
    },
    { timestamps: true }
);

ActivitySchema.index({ service: 1, reqDtime: -1 }); // Index service & time for better query performance

export const ActivityModel = mongoose.model("Activity", ActivitySchema);
