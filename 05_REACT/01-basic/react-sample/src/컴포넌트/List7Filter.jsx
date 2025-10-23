import React from 'react'

const List7Filter = () => {

    // 1. 상태 변수
    const [lists, setList] = React.useState(["a", "b", "c"])

    // 2. 상태 변수를 변경해 줄 매서드
    const removeItem = (item) => {
        console.log('삭제됨');
        setList(lists.filter(i=> i !== item)) // item과 다른 항목들만 남겨서 새로운 배열 생성
        //let aa lists.filter (list ->list !==item) // 화살표 함수 축약형
    }



    // 3. 화면에 출력해 줄 내용
    return (
        <div>
            <h2>리스트 항목 삭제</h2>
            <ul>
                {lists.map((item, id) =>
                    <li key={id}>{item}
                        {/* <button onClick={removeItem}>삭제</button> */} 
                        <button onClick={()=>removeItem(item)}>삭제</button> {/* 화살표 함수로 감싸서 매개변수로 item 전달하는 삭제 버튼 */}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default List7Filter
