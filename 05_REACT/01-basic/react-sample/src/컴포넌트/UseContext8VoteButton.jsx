import React from 'react'

const UseContext8VoteButton = ({type, count, onAgree}) => {
  return (
    <div>
      <button onClick={onAgree}>{type}{count}</button>
    </div>
  );
}

export default UseContext8VoteButton
