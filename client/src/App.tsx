import React, { useEffect, useState } from "react";
import "./App.css";
import Product from "./component/Product";
import Form from "./component/Form";

function App() {
  return (
    <div className="App">
      <h1>Connect to Front-end</h1>
      <Product />
      <Form/>
    </div>
  );
}

export default App;
