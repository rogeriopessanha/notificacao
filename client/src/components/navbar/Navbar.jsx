
import "./navbar.css"
import Notification from "../../img/sino.svg"
import Menssage from "../../img/mail1.svg"
import Settings from "../../img/definicoes1.svg"
import { useEffect, useState } from "react"

const Navbar = ({socket}) => {
    const [notifications, setNotifications] = useState([])

    useEffect(() => {
        socket.on("getNotification", (data) => {
            setNotifications((prev) => [...prev, data])
        })
    },[socket])

    console.log(notifications)

    return (
        <div className="navbar">
            <span className="logo">Notificação App</span>
            <div className="icons">
                <div className="icon">
                    <img src={Notification} alt="" className="iconImg" />
                    <div className="counter">3</div>
                </div>
                <div className="icon">
                    <img src={Menssage} alt="" className="iconImg" />
                    <div className="counter">3</div>
                </div>
                <div className="icon">
                    <img src={Settings} alt="" className="iconImg" />
                    <div className="counter">3</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar