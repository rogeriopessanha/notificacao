
import "./navbar.css"
import Notification from "../../img/sino.svg"
import Menssage from "../../img/mail1.svg"
import Settings from "../../img/definicoes1.svg"
import { useEffect, useState } from "react"

const Navbar = ({ socket }) => {
    const [notifications, setNotifications] = useState([])
    const [open, setOpen] = useState(false)

    useEffect(() => {
        socket.on("getNotification", (data) => {
            setNotifications((prev) => [...prev, data])
        })
    }, [socket])

    console.log(notifications)

    const displayNotification = ({ senderName, type }) => {
        let action

        if (type === 1) {
            action = "curtiu"
        } else if (type === 2) {
            action = "comentou"
        } else {
            action = "compartilhou"
        }
        return (
            <span className="notification">{`${senderName} ${action} seu post`}</span>
        )
    }

    const handleRead = () => {
        setNotifications([])
        setOpen(false)
    }

    return (
        <div className="navbar">
            <span className="logo">Notificação App</span>
            <div className="icons">
                <div className="icon" onClick={() => setOpen(!open)}>
                    <img src={Notification} alt="" className="iconImg" />
                    {
                        notifications.length > 0 &&
                    <div className="counter">{notifications.length}</div>
                    }
                </div>
                <div className="icon" onClick={() => setOpen(!open)}>
                    <img src={Menssage} alt="" className="iconImg" />
                </div>
                <div className="icon" onClick={() => setOpen(!open)}>
                    <img src={Settings} alt="" className="iconImg" />
                </div>
            </div>
            {open && (
                <div className="notifications">
                    {notifications.map((n) => displayNotification(n))}
                    <button className="nButton" onClick={handleRead}>Marcar como já lido</button>
                </div>
            )}
        </div>
    )
}

export default Navbar