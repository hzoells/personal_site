import React from 'react';
import './styles/Hobbies.scss';
import Card from "./Card"
import violin from './images/violin.mp3';
import bread from './images/bread.JPG';
const violinist = {
    title: "Violin",
    content: (
        <div>
            I am an enthusiastic amateur violinist who played in the Chicago Youth Symphony for 9 years. I studied with Jin Zhang and Maja Cerar. I now primarily play chamber music.
            <div>
            <audio controls className="hobbies_audio">
                <source src={violin} type="audio/mp3"/>
            </audio>
            </div>
            
        </div>
    )
}
const Cook = {
    title: "Cooking",
    content: (
        <div>
            <a className="hobbies_gif">
                <img className="hobbies_image" src={bread} alt="">
                </img>
            </a>
            Ever since I was young, I have been interested in cooking. My particular interests include bread-baking, pasta-making, fermentation, and knife care.
            
        </div>
    )
}
function Hobbies(){
    return (
        <div className="hobbies_container">
            <Card {...violinist}/>
            <Card {...Cook} />
        </div>
    )
}

export default Hobbies;
