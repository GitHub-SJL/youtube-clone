
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
        secret: "Hello!",
        resave: true,
        saveUninitialized: true,
        // sessionStore을 사용해야하는 이유
        // 쿠키에는 session 데이터가 저장되지 않고 session ID만 저장됨
        // session 데이터는 서버쪽에 저장이됨 그렇게되면 서버를 재시작 시 세션 데이터가 사라짐

        // 세션들을 몽고 database에 저장
        // 그래서 세션들이 서버가 재시작 되도 유지
        store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/wetube" }),
    })
);

// locals 관리를 다른파일로 분리
app.use(localsMiddleware);



app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);



export default app;