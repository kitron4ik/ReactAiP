import React from 'react';

/*function App() {
  const isAdult = true;
  let text;

  if (isAdult) {
    text = "Проходите вам есть 18"
  } else
    text = "Извините, но вам нет 18 лет"
  return <div>
    {text}
  </div>

}*/

/*function App() {
  const isAdmin = false;
  if (isAdmin) {
    return <div>
      <p>Абзац</p>
      <p>Абзац</p>
      <p>Абзац</p>
      <p>Абзац</p>
      <p>Абзац</p>
    </div>
  } else
    return

}*/

// ? = {}
// : = else

/*function App() {
  const age = 19;

  return <div>
    {age >= 18 ? <p>Проходите вы совершеннолетний</p> : <p>Вы не совершеннолетний выйдите отсюда</p>}
  </div>;
}*/

/*function App() {
  const isAuth = true;

  return <div>
    {isAuth && <p>вы авторизованы</p>}
  </div>;
}*/

function App() {
  const isAuth = false;

  return <div>
    {!isAuth && <p>пожалуйста, авторизуйтесь</p>}
  </div>;
}
export default App;