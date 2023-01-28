
import express from "express";
import morgan from "morgan";
import session from "express-session";
import rootRouter from "./routers/rootRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
console.log(process.cwd());

const app = express();
const logger = morgan("dev");



app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));

// 백엔드와 브라우저는 기본적으로 stateless(무상태)
// 즉 백엔드에서 render를 하고 나면 그걸로 끝, 연결 상태를 유지하지않음
// 세션을 통해 서로 기억할수있도록 하는것
// 브라우저와 서버는 쿠키를 통해 세션 정보를 주고 받는다.
// 세션은 router 앞에서 초기화
app.use( 
    // 사이트로 들어오는 모두를 기억하게 될것
    // 로그인 하지않아도 !
    // 브라우저 한테 조그마한 텍스트 조각을 줄것임
    session({
        secret: "Hello!",
        resave: true,
        saveUninitialized: true,
    })
);


app.use((req, res, next) => {
    //백엔드가 기억하고 있는 세션들을 출력
    req.sessionStore.all((error, sessions) => {
        console.log(sessions);
        next();
    });
});


app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);



export default app;