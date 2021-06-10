import React from "react";
import "./App.css";

import Background from "./components/Background";

function App() {
  return (
    <div className="App">
      <Background />
      <section className="container--flex">
        <h1>Hi, I'm Dinh</h1>
      </section>
      <section className="container--flex">
        <h1>About me</h1>
      </section>
    </div>
  );
}

export default App;
