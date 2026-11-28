import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import MessageDiv from "./MessageDiv";
import NewMessage from "./NewMessage";
import Header from "./Header";

async function fetchMessages(postId) {

  try {

  const response = await fetch(`https://messaging-app-f3bk.onrender.com/chat-messages/${postId}`)

  let messagesData = await response.json();

  return messagesData;

  } catch (error) {

    console.log(error);

  }

};

function Chat() {
  const [messages, setMessages] = useState(null);
  const [remount, setRemount] = useState(false);

  const chat = useLocation().state.chat;

  const otherUser = useLocation().state.otherUser;

  console.log(chat);
  console.log(otherUser);

  useEffect(() => {
      
    async function fetchMessagesWrapper() {

      try {        

        const data = await fetchMessages(chat.id);
        console.log(data);
        setMessages([]);
        setMessages(data);        
        
      } catch (error) {
        console.error(error);
      }

    }

    fetchMessagesWrapper();
      
  }, [chat.id, remount])
  
  return(
  <div className="chatContainer">

    <Header route='chat' user={otherUser}></Header>

    <button
      className="refreshBtn"
      onClick={() => setRemount(!remount)}
    >Refresh</button> 

    {console.log(messages)}

    <div className="messagesContainer">

    {messages && messages.map(message => {

      return (
      // <div>{message.content}</div>
      <MessageDiv key={message.id} message={message} localUser={message.username == localStorage.getItem('user')}></MessageDiv>
      )

    })} 

    </div>

    <NewMessage chatId={chat.id} handleClick={() => setRemount(!remount)}></NewMessage>
    
  </div>
  )

}

export default Chat;