import React, { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Du bist fantastisch!,Großartig!,Wunderbar!,herausragend");
  };

  return (
    <div className="text-center w-1/2 mx-auto mt-8 ">
      <h1>Willkommen, Kinder!</h1>
      <button onClick={handleClick}>Klick mich!</button>
      {message && <p className="mt-10 text-xl text-white">{message}</p>}
    </div>
  );
}

export default App;
