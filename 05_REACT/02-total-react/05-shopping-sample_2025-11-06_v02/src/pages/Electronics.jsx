import React, { useEffect } from 'react';
import Subpage from './Subpage';
import { useProductStore } from '../store/useProductStore';

const Electronics = () => {
  const { clearSearch } = useProductStore();
  useEffect(() => {
    clearSearch();
  }, []);
  return (
    <div className="sub-page-wrap">
      <Subpage
        title="전자제품"
        category="electronics"
        banner="./images/electronics-sub-banner.jpg"
      />
    </div>
  );
};

export default Electronics;
