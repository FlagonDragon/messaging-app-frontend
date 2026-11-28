import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Header from "./Header";

async function fetchUser(username) {

  console.log(username);

  try {

  const response = await fetch(`https://messaging-app-f3bk.onrender.com/user/${username}`)

  let userData = await response.json();

  return userData;

  } catch (error) {

    console.log(error);

  }

};

function Profile() {
  const [user, setUser] = useState(null);

  const username = useLocation().state;

  console.log('username is:');
  console.log(username);  
  
  useEffect(() => {

    console.log('USE EFFECT FIRING');
    
      
    async function fetchUserWrapper() {

      try {        

        const data = await fetchUser(username);
        console.log(data);
        setUser(data);        
        
      } catch (error) {
        console.error(error);
      }

    }

    fetchUserWrapper();
      
  }, [username])

  console.log('user is:');
  console.log(user);
  
  if (user) {
  return(
  <div className="profileContainer">

    <Header route='chats' user={user}></Header>

    <div>
      HEY FELLA, THIS IS {user.username}'s PROFILE PAGE'
    </div>

    <div>WHYYYYYYYYYYY</div>
    
  </div>
  )
  }

}

export default Profile;