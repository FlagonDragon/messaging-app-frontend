function MessageDiv({message, localUser}) {

  return(

  <div className={localUser ? "userMessage" : "otherUserMessage"}> 

    <div>{message.content}</div>
    
    <div>By {message.username}</div>

    <div>{localUser ? 'true' : 'false'}</div>
      
  </div>

  )

}

export default MessageDiv;