import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";
import { create } from "zustand";
import { auth, db, storage, googleProvider } from "../firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const useAuthStore = create((set, get) => ({
    //1. 상태변수
    //로그인, 회원가입
    user: null,
    //상품목록을 저장할 배열
    items: [],
    //카트에 담은 상품을 저장할 배열
    cartItems: [],
    //카트에 담긴 상품의 개수
    cartCount: 0,
    //총금액
    totalPrice: 0,

    //2. 메서드
    //==== 외부 데이터를 불러서 ====
    onFecthItems: async () => {
        // fetch('https://fakestoreapi.com/products')
        //     .then(response => response.json())
        //     .then(data => console.log(data));
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log(data);
        set({ items: data })
    },
    //불러진 데이터를 카테고리별로 분리하기
    onItemsCategory: (cate) => {
        const allItems = get().items;
        if (!cate || cate === "all") { return allItems }
        else {
            return allItems.filter((item) => item.category === cate)
        }
    },

    //회원가입
    onMember: async ({ name, nickname, email, password, phone, file, profile }) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            set({ user: userCredential.user })
            alert("회원가입 성공")
        }
        catch (err) {
            alert(err.message)
        }
    },
    //로그인
    onLogin: async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            set({ user: userCredential.user });
            alert("로그인 성공")
        }
        catch (err) {
            alert(err.message)
        }
    },
    //구글로그인
    onGoogleLogin: async () => {
        try {
            // 구글 로그인창을 띄워서 사용자로부터 로그인하게 라고 그 결과값 저장하기
            const result = await signInWithPopup(auth, googleProvider);
            // 로그인한 사람의 정보를 가져오기
            const user = result.user;

            // 그 정보를 데이터베이스에 저장하기
            const userRef = doc(db, "users", user.uid)
            // 이미지 회원인지 아닌지 체크하기
            const userDoc = await getDoc(userRef);
            //데이터가 없으면 새로운 정보로 회원가입을하고 있으면, 
            if (!userDoc.exists()) {
                const userInfo = {
                    uid: user.uid,
                    email: user.email,
                    name: user.displayName,
                    nickname: "",
                    phone: user.phoneNumber,
                    file: user.photoURL,
                    profile: ""
                }
                await setDoc(userRef, userInfo)
                set({ user: userInfo })
            }
            else {
                set({ user: userDoc.data() })
            }
            // 정보를 불러오기
        }
        catch (err) {
            alert(err.message);
        }
    },

    // 카카오 로그인
    onKakaoLogin: async (navigate) => {
        try {
            // 1 카카오 SDK 초기화
            if (!window.Kakao.isInitialized()) {
                window.Kakao.init("415096494840a6ca548a1d48257b2766");
                console.log(" Kakao SDK 초기화 완료");
            }

            // 2 로그인 요청 (Promise 변환)
            const authObj = await new Promise((resolve, reject) => {
                window.Kakao.Auth.login({
                    scope: "profile_nickname, profile_image",
                    success: resolve,
                    fail: reject,
                });
            });
            console.log(" 카카오 로그인 성공:", authObj);

            // 3 사용자 정보 요청 (Promise 기반)
            const res = await window.Kakao.API.request({
                url: "/v2/user/me",
            });
            console.log(" 카카오 사용자 정보:", res);

            // 4 사용자 정보 가공
            const uid = res.id.toString();
            const kakaoUser = {
                uid,
                email: res.kakao_account?.email || "",
                name: res.kakao_account.profile?.nickname || "카카오사용자",
                nickname: res.kakao_account.profile?.nickname || "카카오사용자",
                photoURL: res.kakao_account.profile?.profile_image_url || "",
                provider: "kakao",
                createdAt: new Date(),
            };

            // 5 Firestore에 저장
            const userRef = doc(db, "users", uid);
            const userDoc = await getDoc(userRef);

            if (!userDoc.exists()) {
                await setDoc(userRef, kakaoUser);
                console.log(" 신규 카카오 회원 Firestore에 등록 완료");
            } else {
                console.log("기존 카카오 회원 Firestore 데이터 있음");
            }

            // 6 Zustand 상태 업데이트
            set({ user: kakaoUser });

            alert(`${kakaoUser.nickname}님, 카카오 로그인 성공! `);
            if (navigate) navigate("/dashboard");

        } catch (err) {
            console.error(" 카카오 로그인 중 오류:", err);
            alert("카카오 로그인 실패: " + err.message);
        }
    },

    //로그아웃
    onLogout: async () => {
        await signOut(auth)
        set({ user: null })
    }
}))