import { Fragment } from "react/jsx-runtime";


// export default함수를 뒤에 써도 됨
// function ComFunction2() {
//     return(
//     <Fragment>
//         <h2>함수 컴포넌트 1</h2>
//         <p>return 안에 전체를 묶어줄 태그를 사용해야한다.</p>
//     </Fragment>
//     )
// };

// export default ComFunction2;



// // export default 를 함수 선언 앞에 써도 됨
// export default ComFunction2;
// function ComFunction2() {
//     return (
//         <Fragment>
//             <h2>함수 컴포넌트 작성 2</h2>
//             <p>export를 어디에? 앞에 선언해도 됨</p>
//         </Fragment>
//     )
// };



// 화살표 함수로도 작성 가능
let ComFunction2 = () => {
    return (
        <Fragment>
            <h2>함수 컴포넌트 작성 3</h2>
            <p>화살표 함수로 작성해도 됨</p>
        </Fragment>
    )
};

export default ComFunction2;


