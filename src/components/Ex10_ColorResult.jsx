import React,{useContext} from 'react'
import { ColorContext } from '../example/Ex10'

const Ex10_ColorResult = () => {

  const data=useContext(ColorContext)

  return (
    <div style={{
        width:'100px',
        height:'100px',
        backgroundColor:data.color
    }}></div>
  )
}

export default Ex10_ColorResult
