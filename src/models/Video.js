import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    // date.now() 로하면 즉시 1번만 실행됨 
    // default로 설정하면 매번 따로 설정할 필요없어짐
    createdAt: { type: Date, required: true, default: Date.now },
    hashtags: [{ type: String }],
    meta: {
      views: { type: Number, default: 0, required: true },
      rating: { type: Number, default: 0, required: true },
    },
  });

const Video = mongoose.model("Video", videoSchema);
export default Video;