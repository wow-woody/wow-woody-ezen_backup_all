import { Component } from "react";


  // component 를 쓸 때 꼭 react라고 써 있는 것을 선택해야 import가 상단에 생성됨
class comClass1 extends Component {
    render() {
        return (
            // 꼭 return 안에 하나의 최상위 요소만 있어야 함(div, section, article 등 가능)
            <div>
                <h2>클래스 컴포넌트</h2>
                <p>화면에 보여줄 내용은 반드시 render 안에 넣어야 함</p>
                <p>render 안에는 함수 return을 입력해서 함수값을 반환 해야함</p>
                <p>return 안에는 반드시 전체를 묶어줄 태그를 사용해야함</p>
            </div>
        )
    };
};

export default comClass1; // 꼭 export default 를 써줘야 다른 파일에서 import 해서 쓸 수 있음
