import React,{ useState,createContext} from 'react'
import Ex10_ColorList from '../components/Ex10_ColorList'
import Ex10_ColorResult from '../components/Ex10_ColorResult'

export const ColorContext=createContext();

const Ex10 = () => {
    /** Context란?
     * 리액트 컴포넌트끼리 주고받는 값을 전역적으로 공유할 수 있게 하는 API
     * 
     * Q. props로만 데이터를 전달했을 때 발생할수 있는 문제?
     * A. 깊숙히 위치란 컴포넌트에 데이터를 전달할 경우
     *      여러 컴포넌트를 연달아서 props 설정 => 불편하고 실수가 잦음
     *      => 이러한 현상을 props Drilling 이라고 부른다.
     * 
     * 그래서 Context 로 상태를 전역적으로 관리해준다.
     * 
     * 만드는 순서!
     * 1) context를 만들어준다. (계좌)
     * 2) context import 해준다.
     * 3) Provider로 감싸준다.(행원)
     * 4) " i want data"= useContext
     * 
     */

    const [color,setColor]=useState('');
  return (
    <div>
        <h1>책상 변경하기</h1>
        <p>원하는 색상을 클릭</p>
        <ColorContext.Provider value={{color:color,setColor:setColor}}>
        <Ex10_ColorList></Ex10_ColorList>
        <hr></hr>
        <p>선택하신 색상입니다</p>
        <Ex10_ColorResult/>
        </ColorContext.Provider>
    </div>
  )
}

export default Ex10