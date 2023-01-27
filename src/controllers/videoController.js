// 스키마 모델 불러오기
import Video from "../models/Video";

export const home = async (req, res) => {
  console.log("i start")
  // await이 database에게 결과값을 받을때 까지 기다려줌
  // find는 callback을 필요로 하지 않는다는걸 알려줌
  // 그래서 find는 찾아낸 비디오를 바로 출력해주게됨
  // 만약 try catch를 사용하면 어떠한 에러가 발생 시 await 내 출력 값을 출력 안하고 에러 출력 코드를 실행
  
  const videos = await Video.find({});
  console.log("i finish")
  console.log(videos)
  // i start
  // i finish
  // []
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { pageTitle: `Watching` });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  const { title } = req.body;
  return res.redirect("/");
};