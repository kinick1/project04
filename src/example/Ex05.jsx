import React,{useState, useEffect} from 'react'

const Ex05 = () => {
    // useEffect --> state값이 바뀌고 난 직후 특정 로직을 실행시키는 기능
    const [num,setNum]=useState(0);

    // num값이 10이 된다면 alert을 띄우고 싶다.
    useEffect(()=>{
        // if(num==10){

        // }
        console.log(num);
    })
  return (
    <div>
        <h1>{num}</h1>
        <button onClick={()=>setNum(num+1)}>버튼 너무작다</button>

    </div>
  )
}

export default Ex05