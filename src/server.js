
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

        // 모든 방문자에게 쿠키를 주지않게 하기위해 false 설정
        resave: false,

        // 세션이 새로 만들어지고 수정된 적이 없을때 uninitialized
        // 즉, 아래 코드는 로그인 시 세션이 수정되니까 로그인한 세션은 저장
        saveUninitialized: false,

        store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/wetube" }),
    })
);

// locals 관리를 다른파일로 분리
app.use(localsMiddleware);



app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);



export default app;