import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
// import PostDiv from "./PostDiv";


async function fetchChats() {

  try {

  console.log(localStorage.getItem('id'));

  const userId = localStorage.getItem('id');
  
  const response = await fetch(`https://messaging-app-f3bk.onrender.com/user-chats/${userId}`);

  let chatsData = await response.json();
  
  return chatsData;

  } catch (error) {

    console.log(error);

  }

};

function Chats() {
  const [chats, setChats] = useState(null);

  const navigate = useNavigate();

  const handleClick = (chatId , state) => {
    navigate(`/CHATS/${chatId}`, { state });
  }

  useEffect(() => {
  
      async function fetchChatsWrapper() {
  
        try {        
  
          const data = await fetchChats();
          // console.log(data);
          setChats(data);
          
        } catch (error) {
          console.error(error);
        }
  
      }
  
      fetchChatsWrapper();
  
  }, [])

  console.log('pre');
  console.log(chats);
  // console.log(Array.isArray(posts));
  console.log('post');

  // let myArr = [{id: 1, title: 'title1', content: 'content1'}, {id: 2, title: 'title2', content: 'content2'}]

  return(
  <>

    <h1> Chats </h1>
{/* 
    {posts && posts.map(post => {

      if (post.published == true) {

        return (
        
          <div 
            key={post.id} 
            onClick={() => {handleClick(post.id, post)}}
          >

            <PostDiv post={post}></PostDiv>

          </div>

        )

      }

    })} */}

  </>
  )
    
}

export default Chats;