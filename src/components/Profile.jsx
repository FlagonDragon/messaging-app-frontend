import { useLocation } from "react-router";
import Header from "./Header";

function Profile() {

  const user = useLocation().state;

  console.log('user is:');
  console.log(user);
  
  if (user) {
  return(

  <div className="profileContainer">

    <Header route='chats' user={user}></Header>

    <div>
      HEY FELLA, THIS IS {user.username}'s PROFILE PAGE'
    </div>

    <div>LETS GOOOOOOOOOOOOOO</div>
    
  </div>

  )
  }

}

export default Profile;