import { create } from "zustand";

export const useTodoState = create((set, get) => ({

  // 1. 변수 - 할 일 목록
  // 글자를 입력받을 변수, 입력받은 데이터를 저장할 배열 - 할 일 목록
  inputText: "",
  todos: [],

  // 2. 메서드 - 함수 - 상태 변경 함수
  // 입력한 글자를 input과 동기화하는 함수 - 할 일 추가 함수- inputValue에 저장하는 함수
  onInputText: (value) => set({ inputText: value }),


  // 입력한 할 일을 배열에 추가하는 함수
  onAddTodo: () => {
    const { inputText, todos} = get();
    const newTodo = {
      index: Date.now(),
      text: inputText,
      completed: false,
    };
    const updated = [...todos, newTodo];

    set({ todos: updated, inputText: "" });
  },

  // 토글 가능 함수
  onToggle: (id) => { 
    const { todos } = get();
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    set({ todos: updated });
    console.log();

  },

  // 할일 삭제 함수
  onTodoDelete: (id) => {
    const { todos } = get();
    const updated = todos.filter((todo) => todo.id !== id);
    set({ todos: updated });
   },


  // 할 일 완성 카운터 변경 함수
  onTodoComplete: () => { 
    const {todos} = get();
    const complete= todos.filter(todo => todo.completed).length;
    return complete;
  },

  // 전체가 몇개인지를 카운트하는 함수
  // 첫번쨰 방법
  // onTodoTotal: () => { 
  //   const {todos} = get();
  //   return todos.length;
  // },

  // 두번째 방법
  onTodoTotal: () => get().todos.length, // 화살표 함수에서 바로 return 할 때 중괄호 생략 가능



}));
