import React from 'react';
import reactDOM from 'react-dom';

// function Helloworld(props) {
//   return <p>Hello World! {props.firstname}</p>
// }
// {lastname} distructuring 비구조화
function Helloworld({firstname, lastname}) {
  return <p>Hello World! {firstname + lastname}</p>
}

// react 함수 내에서는 문장(statement) 사용 불가
reactDOM.render(
  <Helloworld firstname='hong' lastname='gildong'/>,
  document.getElementById('root')
);