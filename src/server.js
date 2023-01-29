import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");



app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));


app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        cookie: {
            maxAge: 20000,
        },
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
    })
);

// locals 관리를 다른파일로 분리
app.use(localsMiddleware);

//우리 서버가 /uploads/~~ 라는 url을 이해하도록 설정하지않아서
//이미지가 안보였던거임
//그래서 express에게 uploads주소에 가면 uploads폴더의 내용을 보여주도록 설정
app.use("/uploads", express.static("uploads"));
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);



export default app;