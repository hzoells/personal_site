import React from 'react';
import './styles/Contact.scss';
import Card from "./Card"
import githubMark from "./images/GitHub-Mark-Light-120px-plus.png";
import githubLogo from "./images/GitHub_Logo.png";
import linkedIn from "./images/LI-In-Bug.png";
const about = {
    title: "About Me",
    content: "I am a software engineer with expertise in web development and interest in kernel development. I studied physics at Columbia University. My personal pursuits include the violin and cooking."
}
const contact = {
    title: "Contact",
    content: (
        <div>
            <a href="https://github.com/hzoells" className="contact_links">
                <img src={githubMark} alt=""></img>
                <img src={githubLogo} alst="Github"></img>
            </a>
            <a href="https://www.linkedin.com/in/hugo-zoells-443303153/" className="contact_links">
                <img src={linkedIn} alt="LinkedIn"></img>
            </a>
        </div>
    )
}


function Contact(){
    return (
        <div className="contact_container">
            <Card {...about}/>
            <Card {...contact}/>
        </div>
    )
}

export default Contact;
