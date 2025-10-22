//. list 를 선택하여
let list = ducument.querySelector("list");

// .list의 첫번째 자식인 lo를 선택하여 배경색
let first = list.firstElementChild;
console.log(first);
first.style["background-color"] = "pink";

// .list 마지막 자식 글자 크기
let last = list.lastElementChild;
last.style.fontSize="40px"




// .list 의 모든 자식 테두리
let child = list.children;
console.log(child);
for(1=0; i < child.length; i++){
    child[i].style.border="1px solid red";
}

//for of
for(item of child) {
    item.style.border="1px solid blue"
}

//자식의 개수
console.log(list.childElementCount)
console.log(list.children.length)
console.log(child.length)

// .menu 자식으로 li 첫번째 배경
let menuFirst = document.querySelector(".menu>li:fitst-child");
menuFirst.style.backgroundColor="skublue"

// .menu li 마지막 글자 크기 50 menuLast
let menuLast = document.querySelector(".menu > li:last-child");
menuLast.style["font-size"]="50px"

// .menu li 모든 자식을 선택하여 테두리 노랑
let menuChild = document.querySelectorAll(".menu>li");
console.log(menuchild);//nodeList

 for(j=0; j < menuChild.length j++) {
    menuChild[j].style.border = "2px dashed green"
 }