import React, { useEffect } from 'react'
import MainSwiper from '../components/MainSwiper'
import { useAuthStore } from '../store/authStore'
import Title from '../components/Title';
import SectionSwiper from '../components/SectionSwiper';

const Home = () => {

  // 1. 상태 - 외부 데이터 불러오기 함수 - authStore에서 가져오기
  const { onFetchItems } = useAuthStore();
  useEffect(() => {
    onFetchItems();
  }, []);

  return (
    <div className='container'>
      <MainSwiper />
      <main>
        <section className='content-inner'>
          <Title title="매일 새로운 아웃도어 신상으로 채우다" subTitle="새롭게 선보이는 탐험의 제품을 만나보세요" />
          <SectionSwiper category=""  count={4} />

        </section>
        <section className='content-inner'>
          <div className='section-wrap'>
            <div className="section-left">
              <img src="./images/women-big.jpg" alt="" />
            </div>
            <div className="section-right">
              <Title title="박보검의 지키고 싶은 겨울" subTitle="3배 더 강한 내구성, 리마스터 눕시" />
              <SectionSwiper category="men's clothing" count={3} />
            </div>
          </div>
        </section>
      </main>

    </div >
  )
}

export default Home