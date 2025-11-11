import React, { useEffect } from 'react';
import MainSwiper from '../components/MainSwiper';
import Title from '../components/Title';
import SectionSwiper from '../components/SectionSwiper';
import { useProductStore } from '../store/useProductStore';

const Home = () => {
  // useProductStore() 에 모든 요소를 가지고 와서 items, onFecthItems만 사용하겠다
  // const { items, onFecthItems } = useProductStore();

  // useProductStore()에서 items만 가져와서 사용
  const items = useProductStore((state) => state.items);
  const onFecthItems = useProductStore((state) => state.onFecthItems);

  // const { items, onFecthItems } = useProductStore((state) => ({
  //   items: state.items,
  //   onFecthItems: state.onFecthItems,
  // }));

  useEffect(() => {
    onFecthItems();
  }, [onFecthItems]);
  // useEffect(() => {
  //   {
  //     items.map((i) => console.log(i.category));
  //   }
  // });

  return (
    <div className="container">
      <MainSwiper />
      <main>
        <section className="content-inner">
          <Title
            title="액티비티와 가까워지는 계절"
            subTitle="새롭게 선보이는 탐험의 제품들을 만나보세요"
          />
          <SectionSwiper category="" count={4} />
        </section>
        <section className="content-inner">
          <div className="section-wrap">
            <div className="section-left">
              <img src="./images/women-big.jpg" alt="" />
            </div>
            <div className="section-right">
              <Title
                title="박보검의 지키고 싶은 겨울"
                subTitle="3배 더 강한 내구성, 리마스터 눕시"
              />
              <SectionSwiper category="women's clothing" count={3} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
