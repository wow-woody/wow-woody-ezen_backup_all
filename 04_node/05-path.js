// node에서 기본으로 제공되는 모듈
// 파일 경로, 파일명    
import path from "path";
let fullPath = path.join("node", "sample", "1015", "path-test.js");
console.log(fullPath);  // node\sample\1015\path-test.js");

//폴더명만 분리해서 보기
let dirName = path.dirname(fullPath);
console.log(dirName);  // node\sample\1015

// 파일명만 분리해서 보기
let fileName = path.basename(fullPath);
console.log(fileName);  // path-test.js
