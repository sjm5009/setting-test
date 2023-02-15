import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <h1>Hello World!</h1>;
};

// index.html의 'app'이라는 id를 가진 div에 리액트 코드를 삽입해준다
ReactDOM.render(<App />, document.getElementById('app')); 
