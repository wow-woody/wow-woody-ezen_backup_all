import React, { useEffect } from 'react'
import MainSwiper from '../components/MainSwiper'
import { useAuthStore } from '../store/authStore'
import Title from '../components/Title';
import SectionSwiper from '../components/SectionSwiper';

const Home = () => {
  const { items, onFecthItems } = useAuthStore();
  useEffect(() => {
    onFecthItems();
  }, [])

  // useEffect(() => {
  //   items.map((i) => (
  //     console.log(i.category)
  //   ))
  // })

  return (
    <div className='container'>
      <MainSwiper />
      <main>
        <section className='content-inner'>
          <Title title="매일 새로운 아웃도어 신상으로 채우다"
            subTitle="새롭게 선보이는 탐험의 제품들을 만나보세요" />
          <SectionSwiper category="" count={4}/>
        </section>

        <section className='content-inner'>
          <div className='section-wrap'>
            <div className="section-left">
              <img src="./images/women-big.jpg"  alt="" />
            </div>
            <div className="section-right">
              <Title title="박보검의 지키고 싶은 겨울"
                subTitle="3배 더 강한 내구성, 리마스터 눕시" />
              <SectionSwiper category="women's clothing" count={3}/>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home