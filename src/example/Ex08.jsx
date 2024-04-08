import React,{useState,useRef} from 'react'

const Ex08 = () => {

    const [data,setdata]=useState([]);
    const inputRef=useRef();
    function addData(){
    
        setdata(data.concat(inputRef.current.value))
        inputRef.current.value = '';
    }

    function delData(i){
        setdata(data.filter((dataLs, index) => index !== i));
    }
    
  return (
    <div>
        <h1>2024 올해는 꼭 해보자</h1>
        <input ref={inputRef}></input>
        <button onClick={addData}>계획 추가</button>

        <h1>Todo list</h1>
        <ul>
        {data.map((dataLs, index) => (<li>{dataLs}<button onClick={() => delData(index)}>삭제</button></li>))}
        </ul>
    </div>
  )
}

export default Ex08