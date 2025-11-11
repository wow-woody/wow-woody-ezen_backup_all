import Subpage from './Subpage';
import { useEffect } from 'react';
import { useProductStore } from '../store/useProductStore';

const All = () => {
  //여기서 쓰일 변수
  // const[searchWord,setSearchWoed]=useState("")
  //전역변수 가져오기
  // const {searchWord,setSearchWord} = useAuthStore();
  // input 컴포넌트로 최종 변경
  const { clearSearch } = useProductStore();
  useEffect(() => {
    clearSearch();
  }, []);
  return (
    <div className="sub-page-wrap">
      {/* <div className='search-wrap'>
            <input type="text" 
            placeholder='검색할 상품을 입력하세요'
            value={searchWord}
            onChange={(e)=>setSearchWord(e.target.value)}/>
        </div> */}
      <Subpage title="페이징연습" category="" banner="" />
    </div>
  );
};

export default All;
