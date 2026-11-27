import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import MessageDiv from "./MessageDiv";

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
  <>

    <h1> {otherUser.username} </h1>

    <button onClick={() => setRemount(!remount)}>Refresh</button> 

    {console.log(messages)}

    {messages && messages.map(message => {

      return (
      // <div>{message.content}</div>
      <MessageDiv key={message.id} message={message} localUser={message.username == localStorage.getItem('user')}></MessageDiv>
      )

    })} 
    
  </>
  )

}

export default Chat;