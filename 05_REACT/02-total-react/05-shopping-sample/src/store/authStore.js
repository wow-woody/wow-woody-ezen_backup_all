import { onLog } from 'firebase/app';
import React from 'react'
import { create } from 'zustand'


export const useAuthStore = create((set, get) => ({

    // 1. 상태 변수
    // 로그인, 회원가입
    use: null,

    // 상품 목을을 저장항
    items: [],

    // 카트에 담을 삼품을 저장할 배열
    cartItems: [],

    // 카트에 담긴 상품의 개수
    cartCount: 0,

    //총 금액
    totalPrice: 0,

    // 2. 메서드
    // ====외부 데이터를 불러와서 상태를 변경하는 메서드 ====
    onFetchItems: async () => {

        // // 외부 데이터 불러오기 - 첫번째 방법
        // fetch('https://fakestoreapi.com/products')
        //     .then(response => response.json())
        //     .then(data => console.log(data));
        //     set({items: data})

        // 외부 데이터 불러오기 - 두번째 방법
        const rec = await fetch('https://fakestoreapi.com/products');
        const data = await rec.json();
        set({ items: data });//상태 변경
    },


    //불러진 데이터를 카테고리별로 분석하기
    onItemsCategory: (cate) => {
        const allItems = get().items
        if (!cate || cate === "all") {
            return allItems;
        } else {
            return allItems.filter((item) => item.category === cate);
        }
    },

    // 회원가입
    onMember: async ({ name, nickname, email, password, phone, file, profile }) => {
        // TODO: 회원가입 로직 구현
    },


    // 카카오 로그인
    // onKakaoLogin: async () => {
    //     await onKakaoLogin();
    //     console.log("카카오");
    //     navigator('/userinfo'); // 로그인 후 유저 정보 페이지로 이동
    // },
    onKakaoLogin: async () => {
        try {
            // 1. 로그인 SDK 초기화 하기 카카오 로그인 SDK를 사용하여 로그인 처리
            if (!window.kakao.isInitialized()) {
                window.kakao.init('a316c9d8e8d68a8c14f09ea895c5b050');
                console.log("kakao SDK 초기화 완료");
            }

            // 2. 로그인 요청
            const authObj = await new Promise((resolve, reject) => {
                window.Kakao.Auth.login({
                    scope: "profile_nickname, profile_image",
                    success: resolve,
                    fail: reject,
                });
            });

            //3. 사용자 정보 요청
            // const res = await window. kakao.API.request({
            //     url: '/v2/user/me',
            // })
            // console.log(res)
            window.kakao.API.authorize({
                scope: 'profile_nickname, profile_image',
            })
            // 4. 사용자 정보 가공 - 필요한 정보 추출

            //5,


        }

    },



    // 로그아웃
    // onLogout: () => {
    //     await signOut(auth);
    //     set({ user: null });
    // }



}));