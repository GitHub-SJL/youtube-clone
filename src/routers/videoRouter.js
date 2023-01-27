import express from "express";
import {
    watch,
    getUpload,
    getEdit,
    postEdit,
    postUpload,
    deleteVideo,
  } from "../controllers/videoController";
const videoRouter = express.Router();

//몽고 db가 만들어주는 id 형식을 맞추기 위한 정규표현식
videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.route("/:id([0-9a-f]{24})/delete").get(deleteVideo);
videoRouter.route("/upload").get(getUpload).post(postUpload);
export default videoRouter;
