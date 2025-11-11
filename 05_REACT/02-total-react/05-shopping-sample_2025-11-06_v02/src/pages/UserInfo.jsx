import React, { useState } from "react";
import { useAuthStore } from "../store/authStore";
import UseMenu from "../components/UseMenu";
import "./scss/userinfo.scss";
import Wishlist from "../components/Wishlist";

const UserInfo = () => {
    const { user } = useAuthStore();
    const [selectMenu, setSelectMenu] = useState("주문배송조회");


    if (!user) {
        return <p>로그인된 유저가 없습니다.</p>;
    }

    // 버튼을 클릭하면 선택된 메뉴 변경하기
    const handleMenuClick = ((menu) => {
        setSelectMenu(menu);
    });

    // 변경된 메뉴에 따라서 내용물도 변경 - 우측 내용도 변경하기
    const handleContent = (menu) => {
        switch (selectMenu) {
            case "주문배송조회":
                return <p>주문배송조회</p>
            case "찜목록":
                return <Wishlist />;
                break;
            case "쿠폰함":
                return <p>쿠폰함 내용</p>
            case "적립금":
                return <p>적립금 내용</p>
            case "회원정보수정":
                return <p>회원정보수정 내용</p>
            case "회원탈퇴":
                return <p>회원탈퇴 내용</p>
        }
    }

    return (
        <div className="sub-page">
            <div className="content-inner">
                <div className="user-info-left user-info-wrap">
                    <UseMenu sendSelect={handleMenuClick} />
                </div>
                <div className="user-info-right">
                    <h2>{selectMenu}</h2>
                    <div>{handleContent()}</div>
                    <hr />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <button>로그아웃</button>
                    <button onClick={() => alert(JSON.stringify(user, null, 2))}>유저 정보 보기</button>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;