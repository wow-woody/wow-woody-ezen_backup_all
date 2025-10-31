import { create } from "zustand";

export const useToggle = create((set) => ({
    
    // 토글 상태 변수
    on: false,

    // 토글 상태 변경 메서드
    onToggle: () => set((state) => ({ on: !state.on }))
}));