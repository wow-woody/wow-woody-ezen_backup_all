import { create } from "zustand";

export const useInput = create((set) => ({

    // 텍스트 상태 변수 - 초기값 빈문자열
    text: '',

    // 텍스트 상태 변경 메서드 - 이벤트 객체 전달받아 value 값으로 상태 변경
    onText: (value) => set({ text: value }),

}));