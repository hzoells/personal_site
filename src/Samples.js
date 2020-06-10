import React from 'react';
import './styles/Samples.scss';
import Card from "./Card"
import nationalGif from "./images/national.gif";
import roundpointGif from './images/roundpoint.gif';
import leagueGif from './images/leaguegg.gif';
const nationalRental = {
    title: (
        <a href="https://www.nationalcar.com/en/home.html" className="samples_link">
            National Car Rental Website
        </a>
    ),
    content: (
        <div>
            <a href="https://www.nationalcar.com/en/home.html" className="samples_gif">
                <img className="samples_image" src={nationalGif} alt="">
                </img>
            </a>
            
            <ul>
                <li>Migrated the testing framework to Jest and added snapshot tests.</li>
                <li>Added the reselect API to the project.</li>
                <li>Refactored many components to improve redux efficiency.</li>
                <li>Fixed a production bug involving the browser extension Privacy Badger.</li>
            </ul>
        </div>
    )
}
const leagueSpot = {
    title: (
        <a href="https://suny.leaguespot.gg/league" className="samples_link">
            LeagueSpot Website
        </a>
    ),
    content: (
        <div>
            <a href="https://suny.leaguespot.gg/league" className="samples_gif">
                <img className="samples_image" src={leagueGif} alt="">
                </img>
            </a>
            
            <ul>
                <li>Built out pages and components with accompanying API calls including the match page, teams component, and roster component.</li>
                <li>Implemented an SCSS architecture and styled multiple pages to match designs.</li>
            </ul>
        </div>
    )
}
const rpmservicing = {
    title: (
        <a href="https://www.rpmservicing.com/" className="samples_link">
            Roundpoint Mortgage Servicing Portal 
        </a>
    ),
    content: (
        <div>
            <a href="https://www.rpmservicing.com/" className="samples_gif">
                <img className="samples_image" src={roundpointGif} alt="">
                </img>
            </a>
           
            <ul>
                <li>Worked on refactoring and restyling components based on specs and designs</li>
                <li>Added components to storybook.</li>
            </ul>
        </div>
    )
}

const scatter = {

    title: "Coming Soon: Categories",
    content: (
        <div>
            An API which allows the hosting of multi-member category matching games and an accompanying public facing website.
        </div>
    )
}
function Samples(){
    return (
        <div className="samples_container">
            <Card {...nationalRental}/>
            <Card {...leagueSpot} />
            <Card {...rpmservicing}/>
            <Card {...scatter}/>
        </div>
    )
}

export default Samples;
