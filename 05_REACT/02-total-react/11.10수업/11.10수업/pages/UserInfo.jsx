import React from "react";
import { useAuthStore } from "../store/authStore";

const UserInfo = () => {
  const { user } = useAuthStore();

  if (!user) {
    return <p>로그인된 유저가 없습니다.</p>;
  }

  return (
    <div className="sub-page">
      <div className="content-inner">
        <div className="user-info-left">
          <h2 className="section-title">My Page</h2>
        </div>
        <div className="user-info-right">
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
