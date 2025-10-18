//
let filterBtns = document.querySelectorAll('.menu-list button');
let menuShow = document.querySelector('.menu-show-list');


//외부에 저장된 데이터를 불러와서 저장할 배열
let allMenuItems = []


// 메뉴를 화면에 출력해줄 함수(렌더링 함수)
let renderMenu = (cate = 'all') => {
    console.log('화면에 보여주기');
    console.log(allMenuItems);
    console.log(cate);

    //내용이 변경되면 이전 자료 삭제
    menuShow.innerHTML = "";

    //조건에 맞는 요소를 저장할 배열
    // 삼항 연산자
    // 조건문? 조건이 참일때 실행할 문장: 조건이 거짓일때 실행할 문장
    let filteredMenu = cate === 'all' ? allMenuItems : allMenuItems.filter(item => item.category === cate);

    // 조건에 맞는 데이터 filteredMenu 의 내용을
    // li로 만들어서 그 안에 내용으로 보여주기
    filteredMenu.forEach((item) => {
        let liItem = document.createElement('li');
        liItem.innerHTML = item.name;
        menuShow.append(liItem);
    });

};


// 버튼에 이벤트 등록
filterBtns.forEach(btn => {  

    btn.addEventListener('click', () => {
        let cateType = btn.getAttribute('data-filter');
        console.log(cateType);
        
        // 선택이 안된 모든 버튼은 active 클래스 제거
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // 선택한 버튼만 active 클래스 적용
        btn.classList.add('active');

        // 해당하는 요소를 화면에 출력하기
        renderMenu(cateType);
       
    });
});


//외부데이터를 불러와서 allMenuItems 배열에 저장

//외부 메뉴 데이터를 불러와서 화면에 표시하는 함수
async function fetchMenu(){
    try{
        // 데이터 불러오기
        let menu = await fetch('menuData.json');

        // 데이터를 배열에 넣기 위핸 objerct로 변환
        let data = await menu.json();
        // console.log(menu, data);
        allMenuItems = data;
        renderMenu('all');

        //위의 코드를 then으로 축약 - 직관적인 위의 코드를 권장
        // fetch('menuData.json')
        // .then((menu) => menu.json())
        // .then((data) => {
        //     allMenuItems = data;
        //     renderMenu();
        // });

    } catch(error) {
        //에러가 발생했을 때 처리
        console.log("데이터를 불러오는 중 에러가 발생했습니다.", error);
        menuShow.innerHTML = "<li>데이터를 불러올 수 없습니다.</li>";
    }
};

fetchMenu(); //함수 호출(데이터를 불러와서 화면에 표시)


