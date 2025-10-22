import React, { Component } from 'react'

export default class ComClassProps2 extends Component {
  render() {
    return (
      <div>
        <h2>jsx 문법 - 컴포넌트 속성 값 - 클래스</h2>
        <p>{this.props.city}이라는 도시는 아직 도착하려면 {this.props.hour}시간이 남았습니다.</p>
      </div>
    )
  }
}
