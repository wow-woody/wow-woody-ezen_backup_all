// .me의 부모를 찾아서 배경색 pink
let me = document.querySelector(".me");
let meParent = me.parentElement;
console.log(meParent);
meParent.style.background="pink"


// span의 부모를 찾아서 배경색 skyblue
let span = document.querySelector("span")
let spanparent = span.parentNode;
console.log(spanparent);
spanparent.style.background="skyblue"


//h1의 부모를 찾아서 green
let title = document.querySelector("h1");
let parent = title.parentElement;
// let parent = title.parentNode;
console.log(parent);
parent.style.border ="5px solid green"

