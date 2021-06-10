import React from "react";
import "./App.css";

import Background from "./components/Background";

function App() {
  return (
    <div className="App">
      <Background />
      <section className="container--flex">
        <h1 className="title">Hi, I'm Dinh</h1>
        <p className="subtitle">I make beautiful things that people enjoy</p>
      </section>
      <section className="container--flex">
        <h1>About me</h1>
      </section>
    </div>
  );
}

export default App;
