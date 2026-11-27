function MessageDiv({message, localUser}) {

  return(

  <div className={localUser ? "message userMessage" : "message otherUserMessage"}> 

    <div>{message.content}</div>
      
  </div>

  )

}

export default MessageDiv;