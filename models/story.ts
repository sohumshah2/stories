import mongoose, { Schema, models } from "mongoose";

const storySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contents: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    dateCreated: {
      type: Date,
      required: true,
    },
    dateLastModified: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

storySchema.index({ name: 1 });
storySchema.index({ author: 1 });

const Story = models.Story || mongoose.model("Story", storySchema);
export default Story;
