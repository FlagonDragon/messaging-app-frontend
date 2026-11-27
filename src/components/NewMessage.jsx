import { useState } from "react";
import { useNavigate } from "react-router";

async function postMessage(content, chatId, handleClick, navigate) {

  let username = localStorage.getItem('user');

  console.log(content);  
  console.log(username);  
  console.log(chatId);  

  try {

  const response = await fetch("https://messaging-app-f3bk.onrender.com/message", {
    method: "POST",
    body: JSON.stringify({ content: content, username: username, chatId: chatId }),
    headers: {
      'Content-type': 'application/json', 
      // 'authorization': 'Bearer '+localStorage.getItem('token')
    },
  });

  let data = await response.json();

  console.log(data);

  handleClick();

  } catch (error) {

    console.log(error);

    navigate(`/log-in`);

  }

}

function NewMessage({ chatId, handleClick }) {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  return(

    <div className="newMessageContainer"> 

    <form onSubmit={e => e.preventDefault()}>

      <textarea
        className="messageContent"
        name="messageContent"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <div>
        <button
          type='submit'
          onClick={() => {
            postMessage(value, chatId, handleClick, navigate)
            setValue("")
          }}
        >Submit</button>
      </div>

    </form>

    </div>
      
  )

}

export default NewMessage;