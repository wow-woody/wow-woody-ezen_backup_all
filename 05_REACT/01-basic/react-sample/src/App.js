// import logo from './logo.svg';
import './App.css';
import ComClass1 from './컴포넌트/ComClass_1.jsx';
import ComClassProps2 from './컴포넌트/ComClassProps2.jsx';
import ComFunctImg3 from './컴포넌트/ComFunctImg3.jsx';
import ComFunction2 from './컴포넌트/ComFunction2';
import ComFuntProps1 from './컴포넌트/ComFuntProps1.jsx';
import ComFuntProps3 from './컴포넌트/ComFuntProps3.jsx';
import Jsx1Variable from './컴포넌트/Jsx1Variable.jsx';
import Jsx2Function from './컴포넌트/Jsx2Function.jsx';
import Jsx3If from './컴포넌트/Jsx3If.jsx';
import Jsx4Style from './컴포넌트/Jsx4Style.jsx';
import Jsx5Import from './컴포넌트/Jsx5Import.jsx';
import ComFunctProps4Object from './컴포넌트/ComFunctProps4Object.jsx';
import ComFuctProps5Child from './컴포넌트/ComFuctProps5Child.jsx';
import ComCombine1 from './컴포넌트/ComCombine1.jsx';
import ComCombine2Object from './컴포넌트/ComCombine2Object.jsx';
import ComCombine3Object from './컴포넌트/ComCombine3Object.jsx';
import ComCondition1Class from './ComCondition1Class.jsx';
import ComCondition2Funct from './컴포넌트/ComCondition2Funct.jsx';
import ComCondition3 from './컴포넌트/ComCondition3.jsx';
import ComConditionLogin4 from './컴포넌트/ComConditionLogin4.jsx';

const user = {
  name: '책상',
  imageUrl: "./images/desk.jpg",
  imageSize: 400
}
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
      <h1>react 연습페이지</h1>
      <br />
      <h2>컨포넌트의 종류</h2>
      <p>클래스 컴포넌트</p>

      <ComClass1 />

      <p>함수 컨포넌트</p>
      <ComFunction2 />

      <br />
      <hr />
      <br />

      {/* 
      rafce 뜻 
      r : react
      a : arrow
      f : function
      c : component
      e : export
      
      */}




      <h2>이미지 - 함수 컴포넌트</h2>
      <ComFunctImg3 />

      <br />
      <hr />
      <br />

      <h2>jsx 문법 알아보기</h2>
      <p>1. 부모 요소가 반드시 하나가 감싸 줘야한다.</p>
      <p>2. 자바스크립트 표현식(변수와 수식)을 사용할 수 있다. - { }로 묶어서 사용해야 한다.</p>
      <p>3. 조건문은 삼항조건 연산자를 주로 사용한다.</p>
      <p>4. 스타일 - fontColor(낙타봉 표기법 - carmel case)를 사용한다.</p>
      <p>5. 주석문 - {/* 주석문 내용 */}  이렇게 사용함</p>

      <Jsx1Variable />

      <br />
      <hr />
      <br />

      <Jsx2Function />

      <br />
      <hr />
      <br />

      <Jsx3If />

      <br />
      <hr />
      <br />

      <Jsx4Style />

      <br />
      <hr />
      <br />

      <Jsx5Import />

      <br />
      <hr />
      <br />

      <h2>컴포넌트 속성</h2>
      <p>컴포넌트가 가지는 속성을 props라고 함</p>
      <p>props를 전달하여 값 사용하기</p>
      <ComFuntProps1 name="홍길동" age={20} />
      <ComFuntProps1 name="짱구" age={5} />

      <br />
      <hr />
      <br />

      <ComClassProps2 city="서울" hour={1} />

      <br />
      <hr />
      <br />

      <ComFuntProps3
        name={user.name}
        imgUrl={user.imageUrl}
        imgSize={user.imageSize} />


      <br />
      <hr />
      <br />

      <ComFunctProps4Object users={user} />

      <br />
      <hr />
      <br />

      <ComFuctProps5Child>
        <h3>컴포넌트 자식</h3>
        <p>컴포넌트 안에 내용을 넣을 수 있음</p>
      </ComFuctProps5Child>

      <br />
      <hr />
      <br />

      <h2>컴포넌트 합성</h2>
      <p>컴포넌트의 사용목적 : 데이터 재사용</p>
      <ComCombine1 />

      <br />
      <hr />
      <br />

      <ComCombine2Object />

      <br />
      <hr />
      <br />

      <ComCombine3Object />

      <br />
      <hr />
      <br />

      <h2>조건문</h2>
      <h3>클래스 컴포넌트</h3>
      <ComCondition1Class />

      <br />
      <hr />
      <br />

      <ComCondition2Funct />


      {/* 상품명, 품절 옵션을 출력해줄 컴포넌트 생성*/}

      <ComCondition3 />

      <br />
      <hr />
      <br />

     <ComConditionLogin4 />

    </div>
  );
};

export default App;
