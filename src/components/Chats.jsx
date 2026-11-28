import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Preview from "./Preview";
import Header from "./Header";

const userId = localStorage.getItem('id');

async function fetchLocalUser() {

  const localUsername = localStorage.getItem('user');

  try {

  const response = await fetch(`https://messaging-app-f3bk.onrender.com/user/${localUsername}`)

  let userData = await response.json();

  return userData;

  } catch (error) {

    console.log(error);

  }

};

async function fetchChats() {

  try {

  console.log(userId);
  
  const response = await fetch(`https://messaging-app-f3bk.onrender.com/user-chats/2`);

  let chatsData = await response.json();
  
  return chatsData;

  } catch (error) {

    console.log(error);

  }

};

function Chats() {
  const [chats, setChats] = useState(null);
  const [localUser, setLocalUser] = useState(null);

  const navigate = useNavigate();

  const handleClick = (chatId , state) => {
    navigate(`/chats/${chatId}`, { state });
  }
  
  function findOtherUser(arr) {

    var otherUser;

    arr.forEach(user => {

      if (user.id != userId) {
        otherUser = user;
        return;
      }

    });
    
    return otherUser;

  }

  useEffect(() => {
  
    async function setUpWrapper() {

      try {        

        const chatData = await fetchChats();
        const userData = await fetchLocalUser();
        
        setChats(chatData);
        setLocalUser(userData);

        
      } catch (error) {
        console.error(error);
      }

    }

    setUpWrapper();
  
  }, [])

  console.log(chats);
  console.log(localUser);
 
  return(
  <>

    <Header route='chats' user={localUser}></Header>

    <div className="chatsContainer">

    {chats && chats.map(chat => {

      let otherUser = findOtherUser(chat.users);

      // console.log(otherUser.username);
      
      return (
      
        <div 
          key={otherUser.username} 
          onClick={() => {handleClick(chat.id, {chat: chat, otherUser: otherUser})}}
        >

          <Preview username={otherUser.username}></Preview>

        </div>

      )

    })}

    </div>

  </>
  )
    
}

export default Chats;