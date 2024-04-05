import React, { useState } from 'react';
import "../App.css";

const Ex04 = () => {
  // 상태 변수들
  const [comScore, setComScore] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [result, setResult] = useState('');
  const [comDice, setComDice] = useState(1);
  const [userDice, setUserDice] = useState(1);

  // 주사위 이미지 URL 배열
  const diceImages = [
    "http://localhost:3000/image/dice1.png",
    "http://localhost:3000/image/dice2.png",
    "http://localhost:3000/image/dice3.png",
    "http://localhost:3000/image/dice4.png",
    "http://localhost:3000/image/dice5.png",
    "http://localhost:3000/image/dice6.png"
  ];

  // 게임 시작 함수
  const startGame = () => {
    const comRandomIndex = (parseInt(Math.random() * 6)+1);
    const userRandomIndex = (parseInt(Math.random() * 6)+1);

    if (comRandomIndex > userRandomIndex) {
        setComScore(comScore + 1);
        if (comScore + 1 === 10) {
          setResult('COM wins!');
        }
      } 
    else if (comRandomIndex < userRandomIndex) {
        setUserScore(userScore + 1);
        if (userScore + 1 === 10) {
          setResult('USER wins!');
        }
      }
    setComDice(comRandomIndex);
    setUserDice(userRandomIndex);
    
    console.log()
  };

  return (
    <div>
      <h1>DICE GAME</h1>
      <button onClick={startGame}>Start</button>
{/* react에서 중괄호는 파일내의 데이터를 이용하겠다.*/}
      <div className="dice">
        <img src={diceImages[comDice - 1]} alt="dice"></img>
        {/* <img src={"./img/dice"+comDice+".png"}></img> */}
        <h1>Com Score : {comScore}</h1>
      </div>
      <div className="dice">
        <img src={diceImages[userDice - 1]} alt="dice"></img>
        {/* <img src={"./img/dice"+userDice+".png"}></img> */}
        <h1>User Score : {userScore}</h1>
      </div>

      <h1>결과 : {result}</h1>
    </div>
  );
};

export default Ex04;

