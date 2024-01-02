import * as React from "react";

function Message(props) {
  const { text = "fake poruka", isBotMessage = false } = props;
  return <div>{text}</div>;
}

export default Message;
