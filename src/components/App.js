import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  let text = "I am learning React. My life is getting better. ";
  return (
    <div id="root">
      <p>{text}</p>
    </div>
  );
};

export default App;
