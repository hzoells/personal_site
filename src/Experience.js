import React from 'react';
import './styles/Experience.scss';
import Card from "./Card"
import rightpointLogo from "./images/rightpoint.png";
import isobarLogo from './images/isobar.jpeg';
const rightpoint = {
    title: (
        <a href="https://www.rightpoint.com/" className="experience_link">
                <img src={rightpointLogo} alt=""></img> Rightpoint
        </a>
    ),
    content: (
        <ul>
            <li>Worked on teams for two public facing web applications for two client companies, an esports league administration app and a mortgage lender's user portal. This work focused primarily on the React/Redux front end.</li>
            <li>Built and tested pages from scratch with accompanying API requests and react components.</li>
            <li>Implemented an SCSS architecture and styled multiple pages to match designs.</li>
            <li>Also worked on refactoring components, and fixing bugs.</li>
        </ul>
    )
}
const isobar = {
    title: (
        <a href="https://www.isobar.com/us/en/" className="experience_link">
                <img src={isobarLogo} alt=""></img> Isobar
        </a>
    ),
    content: (
        <ul>
            <li>Worked on the front end of National Car Rental's website. This mainly focused on maintaining the code base, unit testing, and trying out new technologies</li>
            <li>Refactored pages to reduce props drilling due to Redux state updates</li>
            <li>Presented the benefits of using the Reselect API to the team and added it to the application.</li>
            <li>Oversaw the transition from Mocha/Chai unit testing to Jest unit testing and added Jest's snapshot feature to improve and expand testing of components.</li>
            <li>Solved a production issue involving the ad-blocking chrome extension privacy badger.</li>
            <li>Built an internal website for deeplinking into reservation flows from scratch with Nodejs/Express backend.</li>
        </ul>
    )
}
const jules = {
    title: "Jules-Gonin Eye Hospital",
    content: (
        <ul>
            <li>Analyzed the data and wrote and compiled the report for a retrospective study comparing post-operative results for LASIK and PRK surgical techniques.</li>
            <li>Wrote R scripts to conduct data analyses and generate graphs</li>
            <li>Spoke french with coworkers.</li>
        </ul>
    )
}


function Experience(){
    return (
        <div className="experience_container">
            <Card {...rightpoint}/>
            <Card {...isobar}/>
            <Card {...jules}/>
        </div>
    )
}

export default Experience;
