import "./App.css";
import { useState } from "react";
import Message from "./components/message/Message";

function App() {
  const [inputValue, setInputValue] = useState();
  const [poruke, setPoruke] = useState([]);

  const onInputChanged = function (e) {
    console.log("onInputChanged", e.target.value);
    setInputValue(e.target.value);
  };

  const onSendButtonClick = function () {
    if (inputValue === "") return;

    setPoruke(
      [...poruke].concat({
        text: inputValue,
        isBotMessage: false,
      })
    );
    console.log("onSendButtonClick", poruke);

    setInputValue("");
  };

  return (
    <>
      <h1>Chat</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "70vh",
        }}
      >
        <h2>Sve poruke</h2>
        {poruke.map((item) => (
          <Message text={item.text}></Message>
        ))}
        <div></div>
      </div>
      <div>
        <input
          type="text"
          autoFocus
          onChange={onInputChanged}
          style={{ display: "block" }}
        ></input>
        <button onClick={onSendButtonClick}>Send</button>
      </div>
    </>
  );
}

export default App;
