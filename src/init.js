// server.js에서 관리하지만 관련없던 코드들을 분리했음

import "./db";
// db를 mongoose와 성공적으로 연결시킨 후 model들을 인식
import "./models/Video";
import app from "./server"

const PORT = 4000;




const handleListening = () =>
    console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);