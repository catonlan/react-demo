// 自定义组件
import React from 'react';

function Hello(props) {
  return (
    <div>
      <h1>Hello World，{props.nickname}!</h1>
    </div>
  );
}

export default Hello;