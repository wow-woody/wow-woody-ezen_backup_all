import React, { Component } from 'react'

export default class ComCondition1Class extends Component {

    // 1. 변수 선언
    constructor(props) {
        super(props); //부모의 props를 받아오는 명령어 ** 꼭 작성해야 함
        this.state = {
            name:"홍길동",
            isToggle:false,
        }; //state 는 객체 형태로 값을 저장 - // 클래스 내부의 함수를 상태 변수로 쓸 때는 반드시 constructor 에서 미리 선언
        this.toggle=this.toggle.bind(this);
    };



 // 2. 매서드 -조건문 작성(동작)
    toggle(){
        // isToggle : false/true
       console.log("호출됨 클릭됨")
       
        // this.setState(이전자료 => ({
        //     상태변수:이전자료 변수
       //})); // setState() : state 값을 변경하는 함수

       this.setState((state)=> ({
            isToggle: !state.isToggle,
        }))
    }


    // // 2. 매서드 -조건문 작성(동작) - 화살표 함수로 작성
    // toggle=()=> {
    //     // isToggle : false/true
    
    //        console.log("호출됨 클릭됨")
    // //     this.setState(이전자료 => ({
    // //         상태변수:이전자료 변수
    // //    })); // setState() : state 값을 변경하는 함수

  
    //    this.setState( state =>({
    //     isToggle: !this.state.isToggle,

    //     }));
    // };


    // 3. 붙일 내용 - DOM 구조 jsx 문법
  render() {
    return (
      <div>
        <p>버튼을 클릭해 보세요</p>
        <p>button은 isToggle의 값이 true몇 "ON", false "OFF"</p>
        <button onClick={this.toggle}>{this.state.isToggle ? "ON" : "OFF"}</button>
      </div>
    )
  }
}
