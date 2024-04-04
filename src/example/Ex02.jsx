import React from 'react'
import '../App.css'
// import pic from'../image/img.jpg'

const Ex02 = () => {

    
    /*
    react 에서 이미지 띄우는 방법 3가지
    1. src폴더를 통해 이미지를 import
    -> import 변수 from '경로'
    */

    /* 
    2. public 폴더를 통해 이미지에 접근
    - public 폴더는 그 폴더 자체로 이미 서버와 통신중
    - public 폴더에 있는 파일들은 고유 주소를 갖게됨
    - http://localhost:3000/폴더이름/파일이름.확장자
    */
    let pic="http://localhost:3000/image/img.jpg"

    /*
    3. 외부 url을 이용
    */
   // let pic="https://image.edaily.co.kr/images/Photo/files/NP/S/2017/07/PS17072900100.jpg"

  return (
    <div className='div-center'>
        <img width="300px" src={pic}></img>
    </div>
  )
}

export default Ex02
