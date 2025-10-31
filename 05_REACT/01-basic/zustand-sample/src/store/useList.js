import { create } from "zustand";

export const useList = create((set, get) => ({

    // 1. 변수 - 상태 관리할 값들 - 초기값 설정 - 빈문자열, 빈배열
    text1: "",
    items: [],

    // 2. 함수 - set을 이용해 상태 변경
    onText1: (value) => set({ text1: value }),

    // 3. 입력한 글자의 추가 버튼을 클릭하면 배열에 넣기
    // onAdd: () => {
    //     // text1에 있는 내용과 배열에 있는 내용을 가지고 와서 
    //     const {items, text1} = get();

    //     // 변경된 내용으로 변경하기
    //     const newItems = [...items, text1];
    //     set(() => ({
    //         items: newItems,
    //         text1: "",
    //     }));

    
    // 3-1. 입력한 글자의 추가 버튼을 클릭하면 배열에 넣기 - 간단히 작성
    onAdd: () => {
        set((state) => ({
            items: [...state.items, state.text1],
            text1: "",
        }))
    },
}))