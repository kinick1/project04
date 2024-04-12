import React from 'react'

const Ex09_Subitem = ({text,changeData}) => {

  return (
    <div>
      <p>
        <span>1-2. 상위 컴포넌트에서 입력받은값은 {text}입니다.</span>
      </p>

      <p>
        <span>2-1. 하위에서 입력 : </span>
        <input type='text' onChange={changeData}></input>
      </p>
    </div>
  )
}

export default Ex09_Subitem