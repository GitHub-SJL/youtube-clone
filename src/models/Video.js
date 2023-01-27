import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true, maxLength: 80 },
    description: { type: String, required: true, trim: true, minLength: 10 },
    createdAt: { type: Date, required: true, default: Date.now },
    hashtags: [{ type: String, trim: true }],
    meta: {
        views: { type: Number, default: 0, required: true },
        rating: { type: Number, default: 0, required: true },
    },
});

// middleware는 무조건 model이 생성되기 전에 만들어야함
//this는 업로드할 비디오가 됨
//hashtags는 [] 안에 
//하나의 string으로 저장되기에 [0]으로 꺼내서 수정
videoSchema.pre("save", async function () {
    this.hashtags = this.hashtags[0]
        .split(",")
        .map((word) => (word.startsWith("#") ? word : `#${word}`));
});
const Video = mongoose.model("Video", videoSchema);
export default Video;