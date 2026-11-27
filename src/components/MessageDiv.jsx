function MessageDiv({message}) {

  return(

  <div className="commentContainer"> 

    <div>{message.content}</div>
    
    <div>By {message.username}</div>
      
  </div>

  )

}

export default MessageDiv;