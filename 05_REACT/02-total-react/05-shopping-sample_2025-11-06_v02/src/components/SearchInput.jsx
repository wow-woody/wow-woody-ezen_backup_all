import React from 'react'
import { useAuthStore } from '../store/authStore'
import { useProductStore } from '../store/useProductStore';

const SearchInput = () => {
    const { searchWord, setSearchWord } = useProductStore();
    // const {searchWord,setSearchWord} = useProductStore((state)=>({
    //     searchWord:state.searchWord,
    //     setSearchWord:state.setSearchWord
    // }))

    return (
        <div className='search-wrap'>
            <input type="text"
                placeholder='검색할 상품을 입력하세요'
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
            />
        </div>
    )
}

export default SearchInput