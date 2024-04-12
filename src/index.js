import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
// import App from './App';



// =============================[STEP 1. state관리]=================================
// 1) useState 개념 추가사항
// import App from './example/Ex01'

// 2) useState를 활용해 좋아요 실습을 해보자!
// import App from './example/Ex02'

// 3) useState 실습 : 랜덤게임 
// import App from './example/Ex03'

// 4) useState 실습 : 주사위 게임
// import App from './example/Ex04'

// 5) useEffect 개념
// import App from './example/Ex05'

// 6) input태그
// import App from './example/Ex06'

// 7) Map, fillter 다루기
// import App from './example/Ex07'

// 8) todo list 만들기
// import App from './example/Ex08'

// =============================[STEP 1. 데이터 관리]=================================

// 9) 양방향 데이터 전달
// import App from './example/Ex09'

// 10) context API 사용해보기
import App from './example/Ex10'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
