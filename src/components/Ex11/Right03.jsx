import React,{useContext} from 'react'
import { NumContext } from '../../example/Ex11'

const Right03 = () => {
    // + 버튼 클릭시 setNum을 이용해야한다!!
    // setNum을 꺼내서 버튼이 눌렸을때 1증가하게끔 만들어주자!

    const data=useContext(NumContext);
  return (
    <div>
        <button onClick={()=>data.setNum(data.num+1)}>+</button>
    </div>
  )
}

export default Right03