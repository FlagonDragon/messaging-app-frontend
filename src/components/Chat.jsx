import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import CommentDiv from "./CommentDiv";
import NewComment from "./NewComment";

async function fetchMessages(postId) {

  try {

  const response = await fetch(`https://blog-api-iv3t.onrender.com/posts/${postId}`)

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

  // useEffect(() => {
      
  //   async function fetchCommentsWrapper() {

  //     try {        

  //       const data = await fetchMessages(chat.id);
  //       console.log(data);
  //       setMessages([]);
  //       setMessages(data);        
        
  //     } catch (error) {
  //       console.error(error);
  //     }

  //   }

  //   fetchCommentsWrapper();
      
  // }, [chat.id, remount])
  
  return(
  <>

    <h1> Talking to: {otherUser.username} </h1>

    {/* <NewComment postId={post.id} handleClick={() => setRemount(!remount)}></NewComment> 

    {console.log(comments)}

    {messages && messages.map(message => {

      return (
      <CommentDiv key={message.id} message={message}></CommentDiv>
      )

    })} */}
    
  </>
  )

}

export default Chat;