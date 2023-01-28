import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});
mongoose.set('strictQuery', false);

const db = mongoose.connection;


// DB 연결 확인
const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);

//on은 계속 감지, once는 한번만 감지
db.on("error", handleError);
db.once("open", handleOpen);