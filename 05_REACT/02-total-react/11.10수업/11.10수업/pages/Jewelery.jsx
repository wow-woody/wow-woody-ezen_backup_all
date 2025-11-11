import React, { useEffect } from 'react';
import Subpage from './Subpage';
import { useProductStore } from '../store/useProductStore';

const Jewelery = () => {
  const { clearSearch } = useProductStore();
  useEffect(() => {
    clearSearch();
  }, []);
  return (
    <div className="sub-page-wrap">
      <Subpage title="쥬얼리" category="jewelery" banner="./images/jewelery-sub-banner.jpg" />
    </div>
  );
};

export default Jewelery;
