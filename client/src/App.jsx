import "./app.css"
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar"
import Card from "./components/card/Card"
import { posts } from "./data"
import { io } from "socket.io-client";

const App = () => {

  const [username, setUsername] = useState("")
  const [user, setUser] = useState("")
  const [socket, setSocket] = useState(null)

  useEffect(() =>{
    setSocket (io("http://localhost:80"));
    
  },[]);

  useEffect(() =>{
    socket?.emit("newUser", user)
  },[socket, user])


  return (
    <div className="container">

      {user ? (
        <>
          <Navbar socket={socket} />
          {posts.map((post) => (
            <Card key={post.id} post={post} socket={socket} user={user} />
            ))}
            <span className="username">{user}</span>
        </>
      ) : (

        <div className="login">
          <h2>Notificação App</h2>
          <input type="text" placeholder="Digite seu nome" onChange={(e) => setUsername(e.target.value)} />
          <button onClick={() => setUser(username)}>Login</button>
        </div>
      )}

    </div >
  )
}

export default App;