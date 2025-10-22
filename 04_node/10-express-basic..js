import express from 'express';
let app = express();



// 홈화면
app.get("/",(req, res) =>{
    res.send("<h1> 익스프레스로 만든 웹페이지입니다. </h1>");
});


// 포트 3000번으로 서버 실행
app.listen(3000,()=>{
    console.log("익스프레스 서버 실행 : http://localhost:3000");
});