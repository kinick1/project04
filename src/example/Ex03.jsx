import React, { useState } from 'react';
import '../App.css';

const Ex03 = () => {
    const [randomNum, setRanNum] = useState('');
    const [inputNum, setInputNum] = useState('');
    const [result, setResult] = useState('');

    const btnCk = (e) => {
        // 1~3사이의 랜덤한 숫자 출력
        const randomNum = parseInt(Math.random() * 3) + 1;
        console.log('random function', randomNum);

        // 내가 선택한 숫자
        const selectedNum = parseInt(e.target.innerText);
        console.log('inputNum', selectedNum);

        setRanNum(randomNum);
        setInputNum(selectedNum);

        // 
        if (randomNum === selectedNum) {
            setResult('정답입니다~');
        } else {
            setResult('땡!');
        }
    };

    return (
        <div className='div-center'>
            <h1>⚽ 랜덤게임 ⚽</h1>
            <div>
                <button onClick={btnCk}>1</button>
                <button onClick={btnCk}>2</button>
                <button onClick={btnCk}>3</button>
            </div>
            <div>
                <hr />
                <span>내가 누른 숫자 : {inputNum}</span>
                <br />
                <span>컴퓨터 숫자 : {randomNum}</span>
                <br />
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Ex03;
