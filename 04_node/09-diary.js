// 오늘은 node.js를 배웠는데 단순해서 너무 좋았다.
// 위 문장을 my-diary.txt 파일을 생성해서 저장하기
import e from "express";
import fs from "fs";



let content = "오늘은 node.js를 배웠는데 단순해서 너무 좋았다.";

// fs.writeFileSync("./my-diary.txt", content, (err) => {
//     if (err) {
//         console.log("파일 쓰기 중 오류 발생:", err);
//         return;
//     };
//     console.log("파일이 성공적으로 저장되었습니다.");
// });

// fs.writeFileSync("./my-diary.txt", "오늘은 node.js를 배웠는데 단순해서 너무 좋았다.", (err) => {
//     if (err) {
//         console.log("파일 쓰기 중 오류 발생:", err);
//         return;
//     };
//     console.log("파일이 성공적으로 저장되었습니다.");
// });


// my-diary.txt 파일을 생성해서 저장하는 함수
// function writeDiary(content) {
//     fs.writeFileSync("./my-diary.txt", content);
// };
// writeDiary(content);


// my-diary.txt 파일을 생성하면서 시간도 같이 저장하는 함수
// function writeDiary(content) {
//     let date = new Date();
//     let dateText = `${date} ${content}`;
//     fs.writeFileSync("./my-diary.txt", dateText);
// };
// writeDiary(content);




// function writeDiary(content) {
//     let date = new Date();
//     let dateText = `${date} ${content}`;
//     fs.appendFileSync("./my-diary.txt", dateText);
// };
// writeDiary(content);




function writeDiary(content) {
    let date = new Date();
    let dateText = `\n${date}\n${content}\n${'='.repeat(50)}`;
    fs.appendFileSync("./my-diary.txt", dateText);
};
writeDiary(content);