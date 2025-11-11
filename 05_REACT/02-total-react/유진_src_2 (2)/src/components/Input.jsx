import React from 'react';
import { useProductStore } from '../store/useProductStore';

const Input = () => {
  const { searchWord, setSearchWord } = useProductStore();
  // const { searchWord, setSearchWord } = useProductStore((state) => ({
  //   searchWord: state.searchWord,
  //   setSearchWord: state.setSearchWord
  // }));

  return (
    <div className="content-inner">
      <input
        type="text"
        placeholder="검색할 상품을 입력하세요"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
    </div>
  );
};

export default Input;
