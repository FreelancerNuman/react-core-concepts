import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const person = {
    name: "Fahiyan Ahmed",
    age: 10,
    class: 4,
  };
  const style = {
    color: "blue",
  };
  const names = ["Jafar", "Fahiyan", "Sayed", "Wasim", "Salman"];
  const products = [
    { name: "Drone", price: "$100" },
    { name: "Headphone", price: "$34" },
    { name: "Phone", price: "$300" },
    { name: "Airpod", price: "$20" },
  ];

  return (
    <div className="App">
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>

      <p style={style}>Hello, I'm {person.name}.</p>
      <p style={{ backgroundColor: "yellow", color: "black" }}>
        I'm {person.age} years old.
      </p>
      <p>I study in class {person.class}.</p>

      <Counter></Counter>

      <Users></Users>

      <Person name="Fahiyan Ahmed" dBirth="2010"></Person>
      <Person name={names[0]} dBirth="1996"></Person>

      <Product name={products[0].name} price={products[0].price}></Product>
      <Product name={products[1].name} price={products[1].price}></Product>

      {products.map((product) => (
        <Product name={product.name} price={product.price}></Product>
      ))}
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      {users.map((user) => (
        <h2>{user.name}</h2>
      ))}
      {console.log(users)}
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(1);
  const decreaseVal = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={count > 0 ? decreaseVal : alert("No value there")}>
        Decrease
      </button>
    </div>
  );
}

function Person(props) {
  return (
    <div
      style={{
        color: "white",
        backgroundColor: "tomato",
        border: "1px solid red",
        margin: "10px",
        boxShadow: "5px 5px 10px gray",
      }}
    >
      <p>Name: {props.name}</p>
      <p>Date of birth: {props.dBirth}</p>
    </div>
  );
}

function Product({ name, price }) {
  const productStyle = {
    border: "2px solid gray",
    backgroundColor: "navy",
    color: "white",
    height: "200px",
    width: "200px",
    float: "left",
    boxShadow: "5px 5px 10px gray",
    margin: "10px",
  };
  return (
    <div style={productStyle}>
      <h1>{name}</h1>
      <p>{price}</p>
      <button>Buy Now</button>
    </div>
  );
}

export default App;
