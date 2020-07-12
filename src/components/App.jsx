import React, { useState } from "react";

function App() {
  const [isMouseOver, setMouseOver] = useState(false);

  function changeSubmitBtnColour() {
    setMouseOver(true);
  }
  function changeBackSubmitBtnColour() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        id="submitBtn"
        style={{ backgroundColor: isMouseOver ? "Black" : "White" }}
        onMouseOver={changeSubmitBtnColour}
        onMouseOut={changeBackSubmitBtnColour}
        // onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
