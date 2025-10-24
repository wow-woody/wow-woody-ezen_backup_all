import React, { useState } from 'react'


function Checkbox({ label, onToggle }) {
    return (
        <div>
            <input type="checkbox" onChange={() => onToggle(label)} />{label}
        </div>
    )
}


const StateUp5 = () => {

    // 1. //    일반배열
    let arr = ["운동", "독서", "음악감상"]

    // 상태 변수 배열
    let [selected, setSelected] = useState([]); // 선택된 항목을 저장하는 상태변수 - 빈 배열로 초기화


    // 2. 메서드 
    const handleToggle = (label) => {
        console.log('toggle');

        // 선택한 요소를 저장한 selected 배열 안에 
        // 클릭한 라벨이 있는지를 체크하여 같은 값이 있으면
        // 이미 selected 배열에 있으니, 제거하고
        // 없으면 selected 배열에 추가하는 기능
        if(selected.includes(label)) {
            // 이미 선택된 항목이면 selected 배열에서 제거
            setSelected(selected.filter((selected) => selected !== label))
        } 
        else {
            setSelected ([...selected, label]); // 기존 배열 복사 후 새로운 값 추가
        }
    }

    // 3. 화면에 보여줄 내용 작성
    return (
        <div>
            <h2>체크박수 </h2>
            <p>선택 : {selected} </p>
            <div>
                {arr.map((item, id) =>
                    <Checkbox key={id} label={item} onToggle={handleToggle} />
                )}
            </div>
        </div>
    )
}

export default StateUp5
