import fs from 'fs';

// 현대 디렉토리에서 
// file-test.txt 파일을 불러와서 출력하기

// fs.readFile('./file-test.txt', (err, data) => { 
//     if (err) {
//         console.error('파일 읽기 실패', err);
//         return;
//     }
//     console.log('파일 내용:', data.toString());

// });


let data = fs.readFileSync('./file-test.txt', "utf-8");
console.log(data);