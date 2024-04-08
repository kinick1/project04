import React,{useState,useRef} from 'react'

const Ex07 = () => {

    // db에서 가져온 정보
    const [data,setdata]=useState(['a','b','c','d','e']);
    const inputRef=useRef();
    function addData(){
        // 1. 입력받은 데이터를 가져오기
        // inputRef.current.value
        // 2. 가져온 데이터를 array에 추가

        // state 로 만들어진 배열에는 push, pop 사용 불가
        // state 로 만들어진 배열에 데이터를 추가할때는 concat을 사용해야함

        // push --> 기존 배열에 데이터를 추가 --> 배열이 바뀐다.
        // concat --> 기존 배열에 추가해서 새로운 배열을 생성한다. --> 배열이 바뀌지 않는다.
        setdata(data.concat(inputRef.current.value))
        inputRef.current.value = '';
    }
    function delData(){
        // fillter() : 배열에 조건을 줘서 새로운 배열을 만들어주는 함수
        setdata(data.filter((dataEl,index)=>index !==data.length-1))

    }

  return (
    <div>
        <input ref={inputRef}></input>
        <button onClick={addData}>추가</button>
        <button onClick={delData}>후입 삭제</button>
        <ul>
            {/* <li>{array[0]}</li>
            <li>{array[1]}</li>
            <li>{array[2]}</li>
            <li>{array[3]}</li>
            <li>{array[4]}</li> */}

            {/* 
                map() : 배열안에 있는 요소들을 특정 규칙에 맞게끔 바꿔서 
                        새로운 배열을 만들어 주는 함수
            */}
            {/* data : 배열에 있는 요소  */}
            {data.map((dataEl)=><li>{dataEl}</li>)}
            {/* 
                array =['a','b','c','d','e']
                array.map = [<li>a</li>,
                             <li>b</li>,
                             <li>c</li>,
                             <li>d</li>,
                             <li>e</li>]
            */}
        </ul>
    </div>
  )
}

export default Ex07
