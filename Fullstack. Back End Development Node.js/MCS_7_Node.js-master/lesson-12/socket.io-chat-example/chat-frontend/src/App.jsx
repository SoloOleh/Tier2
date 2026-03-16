import { useState, useRef } from "react";
import { nanoid } from "nanoid";
import io from "socket.io-client";

import SigninChatForm from "./components/SigninChatForm/SigninChatForm";
import ChatForm from "./components/ChatForm/ChatForm";
import Chat from "./components/Chat/Chat";

function App() {
  const [nickname, setNickname] = useState("");
  const [messages, setMessages] = useState([]);

  const socketRef = useRef();

  const addNickname = ({nickname}) => {
    socketRef.current = io.connect("http://localhost:5000");
    setNickname(nickname);
    socketRef.current.on("chat-message", data => {
      const {nickname, message} = JSON.parse(data);
      setMessages(prevMessages => {
        const newMessage = {
          id: nanoid,
          type: "user",
          nickname,
          message,
        };
        return [...prevMessages, newMessage];
      });
    })
  };

  const addMessage = ({message})=> {
    setMessages(prevMessages => {
      const newMessage = {
        id: nanoid,
        type: "you",
        nickname,
        message,
      };
      return [...prevMessages, newMessage];
    });
    socketRef.current.emit("chat-message", JSON.stringify({nickname, message}));
  }

  const closeChat = ()=> {
    socketRef.current.disconnect();
    socketRef.current = null;
  }

  return (
    <div className="App">
      {!nickname && <SigninChatForm onSubmit={addNickname} />}
      {nickname && <ChatForm onSubmit={addMessage} />}
      {nickname && <Chat items={messages} />}
      {(nickname && socketRef.current) && <button onClick={closeChat} type="button">Close chat</button>}
    </div>
  )
}

export default App;
