// import { useState } from "react"
import "./card.css"
import Heart from "../../img/heart.svg"
// import HeartFilled from "../../img/heartFilled.svg"
import Comment from "../../img/msg.svg"
import Share from "../../img/share.svg"
import Info from "../../img/info.svg"




const Card = ({post}) => {

    return (
        <div className="card">
            <div className="info">
                <img src={post.userImg} alt="" />
                <span>{post.fullname}</span>
            </div>
            <img src={post.postImg} alt="" />

            <div className="interaction">
                <img src={Heart} alt="" className="cardIcon" />
            </div>
            <div className="interaction">
                <img src={Comment} alt="" className="cardIcon" />
            </div>
            <div className="interaction">
                <img src={Share} alt="" className="cardIcon" />
            </div>
            <div className="interaction">
                <img src={Info} alt="" className="cardIcon" />
            </div>
        </div>
    )
}

export default Card
