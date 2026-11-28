import { useNavigate, Link } from "react-router";

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

    <div className="headerContainer"> 

      <div>HEYO CHATS HOME MENU</div>
              
    </div>

    )
    
  }

}

export default Header;