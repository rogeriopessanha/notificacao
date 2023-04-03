
import "./navbar.css"
import Notification from "../../img/sino.svg"
import Menssage from "../../img/mail1.svg"
import Settings from "../../img/definicoes1.svg"
import { useEffect, useState } from "react"

const Navbar = () => {
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