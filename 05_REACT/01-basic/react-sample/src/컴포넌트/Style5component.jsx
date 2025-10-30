import React from 'react'
import styled from 'styled-components';

const Card = styled.div`
  background-color: skyblue;
  padding: 20px;
  border-radius: 30px;
  `

const Title = styled.h3`
  color: white;
  text-align: center;
  `


const Style5component = () => {
    return (
        <div>
            {/* div 배경색, 안쪽, 모서리 둥글기 h3글자색 가운데 정렬 */}
            {/*<div?>
                    <h3></h3>
                    <p><p>
                </div>*/}
            <Card>
                <Title>스타일드 컴포넌트</Title>
                <p>js 파일 안에 선언된 컴퍼넌트 - 스타일드 컴포넌트를 사용</p>
            </Card>
        </div>
    )
}

export default Style5component
