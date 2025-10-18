import fs from 'fs';

// 파일에 넣을 내용
let content = "오늘은 수요일, 파일 저장하기 배우는 중";


// fs.writeFile('./write-test.txt', content);

fs.writeFile('./write-test-2.txt', content, (err) => {
    if (err) {
        console.log('파일 쓰기 중 오류 발생:', err);
        return; 
    };
    console.log('파일이 성공적으로 저장되었습니다.');
}); 