import fs from 'fs';

// 현재 작업 중인 디렉토리의 파일 목록을 읽어오기
fs.readdir('./', (err, files) => {
    if (err) {
        console.error('에러 발생', err);
        return;
    }
    //파일 목록 출력
    console.log("파일 목록", files);
});