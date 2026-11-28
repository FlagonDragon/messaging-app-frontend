import { useNavigate } from "react-router";

function Header({user, route}) {

  const navigate = useNavigate();

  if (route == 'chat') {

    return(

    <div className="headerContainer chat"> 

      <div 
        className="div1"
        onClick={() => navigate(`/chats`)}
      >«</div>

      <div className="div2">
        <h1>{user.username}</h1>
      </div>

      <div className="div3">
        PROFILE PIC
      </div>
              
    </div>

    )

  } else if (route == 'chats') {

    return(

    <div className="headerContainer chats"> 

      <div className="div1">
        THESE ARE YOUR CHATS
      </div>

      <div className="div2">
        YOUR PROFILE
      </div>
              
    </div>

    )
    
  }

}

export default Header;