import React from 'react';
import './styles/Hobbies.scss';
import Card from "./Card"
import violin from './images/violin2.mp3';
import bread from './images/bread.JPG';
import cake from './images/cake.JPG';
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
            An enjoyment of cooking was instilled in me from a young age by my grandmothers, who taught me both the cullinary skills and enthusiasm.  Areas of particular interest include classic french cuisine, fermentation, and knife care.
            <a className="hobbies_gif">
                <img className="hobbies_image" src={cake} alt="">
                </img>
            </a>
            
        </div>
    )
}
function Hobbies(){
    return (
        <div className="hobbies_container">
            <Card {...Cook} />
            <Card {...violinist}/>
        </div>
    )
}

export default Hobbies;
