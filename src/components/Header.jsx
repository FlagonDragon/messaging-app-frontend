import { useNavigate } from "react-router";

const localName= localStorage.getItem('user');

function Header({user, route}) {

  const navigate = useNavigate();

  if (route == 'chats') {

    return(

    <div className="headerContainer chats"> 

      <div className="div1">
        THESE ARE YOUR CHATS
      </div>

      <div 
        className="div2"
        onClick={() => navigate(`/profile/${localName}`, { state: localName } )}
      >
        YOUR PROFILE
      </div>
              
    </div>

    )

  } else if (route == 'chat') {

    return(

    <div className="headerContainer chat"> 

      <div 
        className="div1"
        onClick={() => navigate(`/chats`)}
      >
        «
      </div>

      <div className="div2">
        <h1>{user.username}</h1>
      </div>

      <div 
        className="div3"
        onClick={() => navigate(`/profile/${user.username}`, { state: user.username } )}
      >
        PROFILE PIC
      </div>
              
    </div>

    )
    
  }

}

export default Header;