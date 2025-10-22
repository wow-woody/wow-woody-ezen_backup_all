import React from 'react'

//상품 목록을 보여줄 컴포넌트 함수 생성 - li 생성 목록
function GoodItem({ kind, isHas }) {
    // return (
    //     // 리턴 안에 조건문 작성 불가 - 삼항연산자 or && || 사용 
    //     // 만약 사용할 때는 빈 태그 박스 하나 추가
    //     <>
    //         if (isHas){
    //             <li>{kind}</li>
    //         } else {
    //             <li>
    //                 {kind} <button>품절</button>
    //             </li>
    //         }
    //     </>
    // )

    if (isHas) {
        // return 안에는 태그를 넣아야 함 조건문 추가 생성 불가
        return (
            <>
                <li>{kind}</li>
            </>
        );
    } else {
        return (

            <>
                <li>
                    {kind} <button>품절</button>
                </li>
            </>
        );
    };
};


const ComCondition3 = () => {
    return (
        <div>
            <h2>상품 출력하기</h2>
            <ul>
                <GoodItem kind="자켓" isHas={true} />
                <GoodItem kind="상의" isHas={false} />
                <GoodItem kind="바지" isHas={false} />
            </ul>
        </div>
    )
}

export default ComCondition3
