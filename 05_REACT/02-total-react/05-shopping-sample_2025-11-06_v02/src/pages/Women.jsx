import React, { useEffect } from 'react';
import Subpage from './Subpage';
import { useProductStore } from '../store/useProductStore';

const Women = () => {
  const { clearSearch } = useProductStore();
  useEffect(() => {
    clearSearch();
  }, []);
  return (
    <div className="sub-page-wrap">
      <Subpage title="여자" category="women's clothing" banner="./images/women-sub-banner.jpg" />
    </div>
  );
};

export default Women;
