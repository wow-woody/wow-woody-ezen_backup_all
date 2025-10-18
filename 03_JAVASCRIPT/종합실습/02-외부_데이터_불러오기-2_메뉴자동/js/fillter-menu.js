// html에 있는 태그 선택자 변수 만들기
let menuButton = document.querySelector(".menu-list");
let menuShow = document.querySelector(".menu-show-list");


// json 파일의 모든 내용을 저장할 배열
let allMenuItems = [];


// 조건에 맞는 내용을 화면에 뿌려줄 힘수(렌더링)
function renderMenu(cate) {
    menuShow.innerHTML = '';

    // 조건에 맞는 메뉴만 저장할 배열
    let filteredMenus = cate === 'all' ? allMenuItems : allMenuItems.filter(item => item.category === cate);

    console.log('조건에 맞는 것',filteredMenus);
    
    // filteredMenus 배열에 있는 내용을 li태그로 만들어서 menuShow에 추가
    filteredMenus.forEach(item => {
        let liItem = document.createElement('li');
        liItem.textContent = item.name;
        menuShow.append(liItem);
    });
};


//버튼 생성 함수
function createButtons(cateList) { 
    console.log('받는 카테고리 ',cateList);

    // 카테고리 버튼 추가하기
    cateList.forEach(cat => {
        let li = document.createElement('li');
        let button = document.createElement('button');
        button.textContent = cat;
        button.setAttribute('data-filter', cat); // data-filter 속성 추가
        li.append(button);
        menuButton.append(li);
    });

    // 모든 버튼을 저장할 배열 변수
    let allBtns = menuButton.querySelectorAll('button');
    allBtns[0].classList.add('active'); //첫번째 버튼 활성화 상태

    // 버튼 이벤트 등록
    allBtns.forEach (btn => {
        btn.addEventListener('click', () =>{
            let cateType = btn.getAttribute('data-filter');
            allBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenu(cateType);
        });
    });
};

// 데이터를 불러줄 함수
async function fetchMenu() {
    try {
        let menu = await fetch('./menuData.json'); 
        // await를 생락하면 promise 상태로 반환됨
        // await를 추가하면 결과물인 response 객체를 반환
        console.log(menu);

        //menu의 response에 있는 내용(갹체)을 object로 변환
        let data = await menu.json();

        // await를 생략하면 promise 상태로 반환됨 결과물은 Array
        // await를 추가하면 결과물인 Array를 반환
        console.log(data);
        allMenuItems = data; 
        console.log(allMenuItems);

        //카테고리 추출하기
        let categories = [];

        //첫번째 요소로 all 추가
        categories.push('all');

        //카테고리가 중복되지 않도록
        allMenuItems.forEach(item =>{
            if(!categories.includes(item.category)){
            categories.push(item.category);
            }
        });
        console.log(categories);

        // 버튼생성 함수
        createButtons(categories);

        //해당하는 내용을 보여줄 함수
        renderMenu('all');

    } catch(error) {
        console.log('데이터 로딩 실패:', error);
        menuShow.innerHTML = '<li>데이터를 볼러올 수 없습니다.</li>';
    };


};



// 데이터를 불러줄 함수 호출

fetchMenu();