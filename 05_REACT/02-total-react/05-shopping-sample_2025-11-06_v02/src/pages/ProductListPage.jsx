import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './scss/productList.scss';
import { useProductStore } from '../store/useProductStore';

const ProductListPage = ({ category }) => {
  const { items, onFecthItems, onItemCategory, searchWord } = useProductStore();

  useEffect(() => {
    if (items.length === 0) onFecthItems();
  }, [items]);

  // 카테고리별 필터링
  let categoryItems = onItemCategory(category);

  // 검색어 필터링
  if (searchWord) {
    const lowerWord = searchWord.toLowerCase();
    categoryItems = categoryItems.filter((item) => item.title.toLowerCase().includes(lowerWord));
  }

  // 페이징 처리
  // 한페이지에 보여질 갯수
  const itemPerPage = 4;
  // 현재 보여지는 페이지를 체크하고 변경하기
  const [currentPage, setCurrentpage] = useState(1);
  // 전체 페이지수 계산하기
  const totalPage = Math.ceil(categoryItems.length / itemPerPage);
  // 4개 보여주기
  const start = (currentPage - 1) * itemPerPage;
  const currentItem = categoryItems.slice(start, start + itemPerPage);
  // 1번 0,4
  // 2번 4,8
  // 3번 8,12
  // 4번 12,16

  const handleGoPage = (pageNum) => {
    if (pageNum < 1 || pageNum > totalPage) return;
    console.log(pageNum);
    setCurrentpage(pageNum);
  };

  // 버튼 생성하기
  const pagerButton = () => {
    // 버튼을 저장할 배열
    const buttons = [];
    for (let i = 1; i <= totalPage; i++) {
      buttons.push(
        <button
          key={i}
          className={currentPage === i ? 'active' : ''}
          onClick={() => handleGoPage(i)}>
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="content-inner">
      {/* 상품목록 */}
      <ul className="sub-goods-list">
        {currentItem.map((item) => (
          <li key={item.id}>
            <Link to={`/product/${item.id}`}>
              <ProductCard sendItem={item} />
            </Link>
          </li>
        ))}
      </ul>
      {/* 페이징 목록 */}
      <div className="pager">
        <button onClick={() => handleGoPage(currentPage - 1)}>이전</button>
        {/* 메서드 () 붙이기 */}
        {pagerButton()}
        <button onClick={() => handleGoPage(currentPage + 1)}>다음</button>
      </div>
    </div>
  );
};

export default ProductListPage;
