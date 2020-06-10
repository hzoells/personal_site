import React from 'react';
import "./styles/Card.scss"
function Card(props){
    return (
        <div className="card_container">
            <div className="card_title">
                {props.title}
            </div>
            <div className="card_content">
                {props.content}
            </div>

        </div>
    )
}
export default Card;
