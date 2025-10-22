import React from 'react'


function Profile({name, img}) {
    return (
        <div>
            <h2>{name}</h2>
            <p><img
                src={img}
                alt="" />
            </p>
        </div>
    );
};



const ComCombine1 = () => {
    return (
        <div>
            <h2>컴퍼넌트 합성연습</h2>
            <p>속성 값이 다른 여러개의 컴포넌"트를 삽입하는 것을 말함</p>
            <Profile name = "홍길동" img= "./images/pc_insta1.png"/>
            <Profile name = "홍길동" img = "./images/pc_insta2.png"/>
            <Profile name = "홍길동" img = "./images/pc_insta3.png" />

        </div>
    );
};

export default ComCombine1
