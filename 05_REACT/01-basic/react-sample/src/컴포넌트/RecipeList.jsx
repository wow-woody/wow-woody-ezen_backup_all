import React from 'react'

const RecipeList = ({id, name, ing}) => {
  return (
    <>
        <li>
            <h3>음식 종류 : {id}</h3>
            <p>음식명 : {name}</p>
            {/* <p>
              <span>재료1 {}</span>
              <span>재료2 {}</span>
            </p> */}
            <p>
              {ing.map((item,id) => (
                <span key={id}>{item}</span> //각 재료를 span태그로 감싸서 출력
              ))};
              </p>
        </li>
    
    
    </>
  )
}

export default RecipeList
