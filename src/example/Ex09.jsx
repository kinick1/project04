import React,{ useState } from 'react'
import Ex09_Subitem from '../components/Ex09_Subitem'

const Ex09 = () => {

    /** 
     * 부모요소 => 자식 요소에게 값을 전달? props
     * 자식요소 => 부모요소에게 값을 전달? 불가. props를 이용한 꼼수 사용 function
      */

    const [pText,setPText]=useState('');
    const [cText,setCText]=useState('');

    /** Ex09.jsx 에서 사용하는 함수 */
    const changeData=(e)=>{
        // console.log("changeData",e.target.value)
        setCText(e.target.value)
    }
  return (      
    <div>
        <h1>컴포넌트끼리 값을 전달해 보자</h1>
        <p>
            <span> 1-1. 상위에서 입력</span>
            <input type='text' onChange={(e)=>{
                // console.log('onchange',e.target.value)
                setPText(e.target.value)
                }}/>
        </p>
        {/* 하위 컴포넌트 */}
        <Ex09_Subitem text={pText} changeData={changeData}/>
        

        <p>
            <span>2-2. 하위에서 입력 받은 값은 {cText} 입니다.</span>
        </p>
    </div>
  )
}

export default Ex09