// 1- DOM // 요소 선택 변수명 설정
let todoForm = document.querySelector('#todo-from');
let todoInput = document.querySelector('#todo-from input');
let todoList = document.querySelector('.todo-list');
let removeAll = document.querySelector('.remove-all');


// 2- localStorage에 저장할 키값 입력 - 2번째 입력
const TODOS_KEY = "todosList";   // 브라우저를 껏다카 켜도 여기에 저장되게 이 코드 작성


// 3- 할일을 저장할 배열 (빈 배열 우선 작성) - 3번째 입력
let toDos = [];


// 4 - 할 일을 구분해 줄 id키값 저장히기
// ( 8번까지 작성 후?) 기존 데이터가 있으면 그 다음 번호부터 시작을 하고, 없을 때는 0 
// math.max(1,2,3,4,5);
// mate.max(2,4,1,5);

// id = 0;  // ->4번 원래 코드
id = toDos.length > 0 ? Math.max(...toDos.map(t => t.id)) : 0;  //8번 입력 후? 코드 // 기존 데이터가 있으면 그 다음 번호부터 시작, 없을 때는 0`
console.log(id)



//5 - let toDos = [];에 넣을 데이터 작성하기
toDos = JSON.parse(localStorage.getItem(TODOS_KEY)) || [];
console.log(toDos);

// 6 - 데이터를 input에 입력한 후에 enter치거나 submit 클릭하면 
//   - 이벤트 submit
todoForm.addEventListener('submit', (e) => {
    //a, from 태그에는 자체 이벤트 동작이 있음(이걸 사용하지 않믐)
    e.preventDefault(); //event의 기본동작 막기
    let newTodo = todoInput.value; //input에 입력한 값 가져오기
    console.log(newTodo);
    todoInput.value = ''; //입력 후 input창 비우기 - 입력 후 글씨 삭제되게 없어지게

    // 위에서 입력받은 내용을 오브젝트로 저장하기
    let neTodoObj = {
        id:++id,
        text:newTodo, // text: newTodo를 입력
        checked:false, // 처음에는 체크가 안되어있으므로 false
    };
    toDos.push(neTodoObj); // toDos 배열에 neTodoObj 오브젝트 추가
    saveToDos(); // *7번 함수 변수명 작성 후에 이 함수 작성 - 7번 함수 호출 - 로컬스토리지에 저장
    showTodos(); // 할 일 추가 후 화면 갱신 ***중요
});


// 7 - 입력된 데이터를 localStorage에 저장하는 함수 작성
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 로컬스토리지에 문자열로 저장
};

// 8 - 입력된 데이터를 화면에 보여줄 함수
function showTodos() {
    todoList.innerHTML = ""; // 기존 리스트를 먼저 비워줌 - 기존 리스트를 비우고 가시 보여주기 , 결국 리스트 리셋해서 다시 보여주기 ***중요

    toDos.forEach(todo => {
        let li = document.createElement('li'); // li 요소에 만들 명령어 
        // 변수명 li에 innerHTML``안에 있는 내용을 넣어라
        li.innerHTML = `
            <span class="line">${todo.text}</span>
            <div class="icon">
                <button class="check-btn">V</button>
                <button class="remove-btn">X</button>
            </div>
        `;
        todoList.append(li); // todoList에 위의 innerHTML의 내용을 추가
        
        // 삭제 버튼 클릭하면 해당 li가 삭제되도록
        li.querySelector('.remove-btn').addEventListener('click', () => {
            // 해당되는 요소를 빼고 나머지를 다시 배열에 넣기
            toDos = toDos.filter(t => t.id !== todo.id); // 클릭한 li의 id와 다른 것들만 다시 toDos에 넣기
            showTodos();
                           
            // 나머지만 다시 보여주기
            saveToDos();
        });
        // 체크 버튼을 클릭하면 해당 lt의 !checked가 되도록

    });
    
};

showTodos();