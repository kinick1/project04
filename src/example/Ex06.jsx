import React,{useState} from 'react'

const Ex06 = () => {
    const[inputText,setinputText]=useState('');
  return (
    <div>
        <h1>Input 태그 다루기</h1>
        {/* 
            e : 이벤트 객체(이벤트의 전반적인 내용 전부)
            e.target : 이벤트를 발생시킨 주체
            e.target.vlaue : input 태그에 적은값을 의미함
        */}
        <input onChange={(e)=>setinputText(e.target.value)}></input>
        <button>출력</button>
        <h1>{inputText}</h1>
    </div>
  )
}

export default Ex06