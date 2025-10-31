import { create } from 'zustand';


// 1. Counter 버튼 증가/감소 상태 관리 스토어
export const useStore = create((set) => ({

    // 1. 변수 선언
    count: 0,

    // 2. 메서드 선언  : 상태 변경 메서드들
    // 2-1. count 1 증가
    onPlus: () => set((state) => 
        ({ count: state.count + 1 })),
    onMinus: () => set((state) => 
        ({ count: state.count - 1})),
}));