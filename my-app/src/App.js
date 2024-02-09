import React from 'react';

/*function App() {
  const arr = [
    <li>1</li>,
    <li>2</li>,
    <li>3</li>,
    <li>4</li>,
    <li>5</li>,
  ];
  return <ul>
    {arr[0]}
    {arr[1]}
    {arr[2]}
    {arr[3]}
    {arr[4]}
  </ul>
}*/

/*function App() {
  const arr = [];

  for (let i = 0; i < 5; i++) {
    arr.push(<p>{i}</p>);
  }

  return <div>
    {arr}
  </div>;
}*/

/*function App() {
  const arr = ['a', 'b', 'c', 'd', 'e'];

  const res = arr.map(function (item, index) {
    return <p key={index}>{item}</p>;
  });

  return <div>
    {res}
  </div>;
}*/

/*function App() {
  const users = [
    { name: 'user1', surn: 'surn1', age: 30 },
    { name: 'user2', surn: 'surn2', age: 31 },
    { name: 'user3', surn: 'surn3', age: 32 },
  ];

  const res = users.map(function (item) {
    return <p key={item.id}>
      <span>{item.name} </span>:
      <span>{item.surn} </span>
      <span>{item.age} </span>
    </p>;
  });

  return <div>
    {res}
  </div>;
}*/

function App() {
  const users = [
    { id: 1, name: 'user1', surn: 'surn1', age: 30 },
    { id: 2, name: 'user2', surn: 'surn2', age: 31 },
    { id: 3, name: 'user3', surn: 'surn3', age: 32 },
  ];

  const rows = users.map(function (item) {
    return <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.surn}</td>
      <td>{item.age}</td>
    </tr>;
  });

  return <table>
    <thead>
      <tr>
        <td>ID</td>
        <td>Имя</td>
        <td>Фамилия</td>
        <td>Возраст</td>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>;
}

export default App;