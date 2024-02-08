import React from 'react';



/*function App() {
  function getDigitsSum(num) {
    let sum = 0;
    while (num) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return (sum)
  }
  const summa = getDigitsSum(123);
  return <div>
    {summa}
  </div>
}*/

/*function App() {
  function getDigitsSum(num) {
    let sum = 0;
    while (num) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return (sum)
  }

  return <div>
    {getDigitsSum(12345)}
  </div>
}*/



/*function App() {
  function show1() {
    alert(1);
  }
  function show2() {
    alert(2);
  }
  return <div>
    <button onClick={show1}>act1</button>
    <button onClick={show2}>act2</button>
  </div>;
}*/

/*function App() {
  function showBtn(txt) {
    alert(txt)
  }
  return <div>
    <button onClick={() => showBtn(1)}>act1</button>
    <button onClick={() => showBtn(2)}>act2</button>
    <button onClick={() => showBtn(3)}>act3</button>
  </div>;
}*/

function App() {
  function func(arg, arg2, event) {
    console.log(arg2, event, arg);
  }
  return <div>
    <button onClick={event => func('eee', event, 'kkk')}>параметр</button>
  </div>;
}


export default App;