import React,{useState,useRef, useEffect} from 'react'

const Ex08 = () => {

  /*
  todos 배열 
    todo 
    - content : 내용 
    - completed : 완료여부 (t/f) 
    - num : 글의 고유번호
  */
    const inputRef=useRef()
    const [todos,setTodos]=useState([{
      content : "물 마시기",
      completed : false,
      num : 1
    }]);
    /** todo 리스트 내에 새로운 todo를 추가하기
    */
    const handleNewTodoAdd=( )=>{
      console.log("새로운 todo",inputRef.current.value)
      setTodos([...todos, {
        content : inputRef.current.value,
        completed : false,
        num: todos.length+1
      }])
      inputRef.current.value = '';
    }
    /* 스프레드 문법 (spread)
      ... 객체 : 객체를 새로 만들어 값을 넣어주는 복사를 진행
    */

    useEffect(()=>{
      inputRef.current.focus();
    },[])
  /** 체크 버튼을 클릭했을때, 할일을 완료 상태로 바꾸 고 밑줄을 그어준다. */
    const handletodoComplete=(num)=>{
      console.log("completed function",num)

      const newTodos=[...todos]

      let idx=newTodos.findIndex(item=> item.num==num);
      console.log("idx",idx)
      newTodos[idx].completed= !newTodos[idx].completed;
      setTodos(newTodos)
    }

    /** 선택한 todo를 삭제하는 함수 */
    const handleTodoDelete = (num) => {
      console.log(num)
      const newTodos=[...todos]
      let idx=newTodos.findIndex(item=> item.num==num);
      // 배열 함수 : splice(원본 배열에 새로운 요소를 추가하거나, 삭제하거나, 교체한 배열을 반환하는 함수)
      // 배열.splice(변경을 시작할 idx, 제거할수, 추가할 내용)
      newTodos.splice(idx,1)
      setTodos(newTodos)
    };
    
    // const [data,setdata]=useState([]);
    // const inputRef=useRef();
    // function addData(){
    
    //     setdata(data.concat(inputRef.current.value))
    //     inputRef.current.value = '';
    // }

    // function delData(i){
    //     setdata(data.filter((dataLs, index) => index !== i));
    // }
    
  return (
    <div>
        <h1>2024 올해는 꼭 해보자</h1>
        <input type='text' ref={inputRef}></input>
        <button onClick={handleNewTodoAdd}>계획 추가</button>

        {/* <input ref={inputRef}></input>
        <button onClick={addData}>계획 추가</button> */}

        <h1>Todo list</h1>
        <ul>
        {/* {data.map((dataLs, index) => (<li>{dataLs} 
        <button onClick={() => delData(index)}>삭제</button></li>))} */}

            {todos.map((item)=>(
              <li key={item.num}>
                <input type='checkbox' onChange={()=>{handletodoComplete(item.num)}}></input>
                <label
                  style={{
                    textDecoration : item.completed ? 'line-through' : 'none'
                  }}
                >
                  <span>{item.content}</span>
                </label>
                <button onClick={()=>{handleTodoDelete(item.num)}}>삭제</button>
              </li>
            ))}

        </ul>
    </div>
  )
}

export default Ex08