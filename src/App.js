import React from "react";
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
  const names = ["Jafar", "Someone", "Someone2"];
  const products = [
    { name: "Drone", price: "$100" },
    { name: "Headphone", price: "$34" },
    { name: "Phone", price: "$300" },
    { name: "Airpod", price: "$20" },
  ];
  return (
    <div className="App">
      <p style={style}>Hello, I'm {person.name}.</p>
      <p style={{ backgroundColor: "yellow", color: "black" }}>
        I'm {person.age} years old.
      </p>
      <p>I study in class {person.class}.</p>
      <Person name="Fahiyan Ahmed" dBirth="2010"></Person>
      <Person name={names[0]} dBirth="1996"></Person>
      <Person name="Jyan" dBirth="2019"></Person>
      <Person name="Ryan" dBirth="2014"></Person>
      <Product name={products[0].name} price={products[0].price}></Product>
      <Product name={products[1].name} price={products[1].price}></Product>
      <Product name={products[2].name} price={products[2].price}></Product>
      <Product name={products[3].name} price={products[3].price}></Product>
    </div>
  );
}

function Person(props) {
  console.log(props);
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
