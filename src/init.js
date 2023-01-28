// 환경변수 도구는 가능한 최대한 앞에서 선언
// init이 서버 시작
// import는 호이스팅이 일어나서 server.js에 있는 코드가
// init.js에서 실행한 함수보다 먼저 실행
// 그래서 다른 파일에서 import를 안해도 환경변수를 사용할수있게된다.
// require은 변수에 할당이 가능한 표현식, import는 할당이 아닌 선언문의 차이
// import는 코드 블록 내에서 위치에 상관없이 require보다 먼저 실행
// 그래서 require로 불러오게되면 상당히 늦게 호출되서 제대로 작동이 안됨
// https://kwoncheol.me/posts/dotenv-and-module
import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import app from "./server"

const PORT = 4000;




const handleListening = () =>
    console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);