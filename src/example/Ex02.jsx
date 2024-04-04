import React,{useState} from 'react'
import '../App.css'
// import pic from'../image/img.jpg'

const Ex02 = () => {
    const [emoji, setEmoji] = useState('♡');   // state를 이용해 emoji를 선언 처음 상태를 ♡로 지정
    const [txt, setTxt] = useState('좋아요');   

    const handleLike = () => {                  // 함수 작성
        if (emoji === '♡') {                   // 만약 emoji(state)가 '♡'라면
            console.log(emoji)  
            setEmoji('♥');                     // emoji를 setEmoji로 바꾸는데 값을 '♥' 로 변경
            setTxt('좋아요 취소');              // txt를 setTxt로 바꾸는데 값을 "좋아요 취소" 로 변경
        } else {                               // ♡가 아니라면 
            console.log(emoji)                  
            setEmoji('♡');                    // emoji를 setEmoji로 바꾸는데 값을 '♡' 로 변경
            setTxt('좋아요');                  // txt를 setTxt로 바꾸는데 값을 "좋아요" 로 변경
        }
    }; 
    /* 좋아요 실습

        1. 비어있는 하트 클릭 시, 하트가 꽉찬하트로 변경
            비어있는 하트 클릭 시, 좋아요 취소로 변경
        
        2. 꽉찬 하트를 클릭 시, 하트가 비어있는 하트로 변경
            내용은 좋아요로 변경    
    
        - 하트 state : emoji
        - 좋아요 state : txt
        - 좋아요를 핸들링하는 함수 : handleLike

        - 하트 클릭시 handleLike 실행 => 
    */

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
    let pic="https://image.edaily.co.kr/images/Photo/files/NP/S/2017/07/PS17072900100.jpg"
    */
    

    return (
        <div className='div-center'>
            <img width="300px" src={pic} alt="example"></img>
            <p>
                <span onClick={handleLike}>{emoji}</span>   {/* span 태그도 onClick을 사용할수 있다. */}                
                {"  "}
                <span>{txt}</span>
            </p>
        </div>
    );
}

export default Ex02
