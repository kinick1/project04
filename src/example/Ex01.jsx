import '../App.css'
import React, {useState} from 'react'

const Ex01 = () => {

  /* React Event
  1. html 요소 안에 onClick : camelCase로 작성
  2. onClick={함수} 이 때, 함수 뒤에 ()를 붙이지 않는다.
  -> 함수 뒤에 소괄호를 붙이면 계속 그 함수만 호출됨
  3. 이 때, 힘수는 별도로 만든 함수여도 o, 안에 바로 함수를 넣는 것도 o
    - {increase} (o)
    - {()=>{console.log("function")}} (o) / 매개변수를 이용할때
  4. DOM 요소 안에만 이벤트를 설정할수 있다.
    - 내가 직접 만든 컴포넌트 활용할 수 없다.
  */
  // 변수 : 값은 변하나 화면에 출력되지 않는다.
  // let num=0

  // state
  // const [state이름. 그 state를 변경시키는 함수]= userState(초기값)
  //      - state 이름 : 변수처럼 활용 가능 (num)
  //      - 대부분 set + state이름을 붙임 (setNum)
  const [num2, setNum2]=useState(0);
  
  /* useState를 사용하는 방법
      1. useState를 import 
      2. state를 선언
      3. state의 값을 변경한다.
      4. state를 변경시키는 함수(변경할값)
      // setNum2(num2+1)
  */
  // (/** */)는 해당 함수에 마우스를 올렸을때 함수의 설명을 띄어준다
  /** 숫자를 1씩 증가시키는 함수 */
  const increase=()=>{
    console.log("increase function")
    num+=1;
    setNum2(num2+1) //    --> 클로저함수(함수 제일 마지막에 실행)
  }
  /** 숫자를 1씩 감소시키는 함수 */
  const decrease=()=>{
    setNum2(num2-1)
  }
  return (
    /*
      1. 리엑트 에서 Event 객체를 사용해보자.
      2. 왜 우리는 리액트에서 변수를 사용할수 없는지 알아보자.
      3. 변수를 대체해서 state를 사용해보자.
    */ 

    <div className='div-center'>
      <h1>{num2}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  )
}

export default Ex01