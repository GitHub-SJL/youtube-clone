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
        // 쿠키에 sign 할때 사용하는 string
        secret: process.env.COOKIE_SECRET,

        //Domain: 쿠키를 만든 backend가 누구인지
        //Expires : 만료날짜, Session은 디폴트고 사용자가 닫으면 만료
        //Max-age : 세션이 언제 만료되는지
        //

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



app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);



export default app;