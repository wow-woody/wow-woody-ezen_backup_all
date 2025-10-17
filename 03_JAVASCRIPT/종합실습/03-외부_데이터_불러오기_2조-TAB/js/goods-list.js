// 버튼영역 선택자
let tabBtn = document.querySelector('.tab-menu-list');

//상품을 보여줄 영역 선택자
let goodsShow = document.querySelector('.product-tab-list');



//모든 제목을 저장할 배열
let productLists = [];




//제품을 보여줄 렌더 함수
function renderProducts(cate) {
    goodsShow.innerHTML = '';

    //카테고리에 맞는 내용을 추출하여 저장할 배열
    let filteredCates = cate === 'all' ? productLists : productLists.filter(good => good.카테고리 === cate);
    console.log('조건에 맞는 카테고리', filteredCates);

    filteredCates.forEach(item => {
        let liItem = document.createElement('li');
        liItem.innerHTML = `
            <img src="${item.이미지}">
            <div class="text-box">
                <div class="badges">
                </div>
                <h3>${item.상품명}</h3>
                <p>${item.가격}</p>
            </div>
        `;
        goodsShow.append(liItem);
    });
}
// 카테고리를 만들어 줄 함수
function createButtons(cateList) {
    cateList.forEach(cat => {
        let li = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = cat;
        button.setAttribute('data-filter', cat);
        li.appendChild(button);
        tabBtn.appendChild(li);
    })
    // 모든 버튼을 저장할 배열 변수
    let allBtns = tabBtn.querySelectorAll('button');
    allBtns[0].classList.add('active'); //첫번째 버튼 활성화 상태

    // 버튼 이벤트 등록
    allBtns.forEach (btn => {
        btn.addEventListener('click', () =>{
            let cateType = btn.getAttribute('data-filter');
            allBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(cateType);
        });
    });

}
//외부 데이터를 불러올 초기 함수
async function fetchProduct() {
    try {
        let product = await fetch('./productList.json');
        let data = await product.json();
        productLists = data;
        console.log(productLists);

        //카테고리를 추출하기
        let categories = [];
        productLists.forEach(goods => {
            if (!categories.includes(goods.카테고리)) {
                categories.push(goods.카테고리);
            }
        })
        console.log(categories);
        createButtons(categories);
        renderProducts('all');

    } catch (error) {
        console.log('데이터 로딩 실패.', error);
    }
};

//초기 함수 호출
fetchProduct();