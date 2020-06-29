import React from 'react';
import nationalGif from "./images/national.gif";
import roundpointGif from './images/roundpoint.gif';
import leagueGif from './images/leaguegg.gif';
import responsiveUI from './images/responsiveUI.gif';
import stylingSample from './images/stylingSample.gif';
export const projects = {
    content:[
        {
            title: (
                "National Car Rental Website"
            ),
            content: (
                <div className="content">
                    <img className="content_image" src={nationalGif} alt="">
                    </img>
                    <h3>
                    The National Rental Car website is a highly interactive, globally deployed web application whose primary function is the creation and management of car rentals.
                    </h3>
                    <p>
                        My contributions:
                    </p>
                    <ul>
                        <li>Migrated the unit-testing framework to Jest from Mocha/Chai. 
                        Used Jest's snapshot feature to replace component tests and to add unit tests previously untested functions.</li>
                        <li>Added the reselect API to the project. The API was used to memoize the props passed to react components on Redux state updates to decrease unnecessary rerendering.</li>
                        <li>Refactored many components to improve redux efficiency. The main focus of refactoring was to increase the number of smart components to decrease the amount of props drilling on state updates.</li>
                        <li>Fixed a production bug involving the browser extension Privacy Badger. Privacy Badger was blocking cookies essential to the functioning of the website. These cookies needed to be added to a master list maintained by Privacy Badger.</li>
                    </ul>
                </div>
            ),
            button: {
                text: 'Visit Site',
                url: 'https://www.nationalcar.com/en/home.html',
            }
        },{
            title: (
                "LeagueSpot Website"
            ),
            content: (
                <div className="content">
                    <img className="content_image" src={leagueGif} alt="">
                    </img>
                    <h3>The LeagueSpot website is used by high schools and other entities to organize and manage esports leagues. Among the functions it provides leagues are the ability to record scores, manage rosters, and run different types of competitions.</h3>
                    <p>
                        My contributions:
                    </p>
                    <ul>
                        <li>Worked on and built out pages from components and styling to accompanying API calls to match functional and design requirements.</li>
                        <li>Implemented the SCSS architecture for the project along ITCSS principles.</li>
                        <li>Worked closely with the client and designers for functionality and UI/UX.</li>
                    </ul>
                </div>
            ),
            button: {
                text: 'Visit Site',
                url: 'https://suny.leaguespot.gg/leagu',
            }
        },
        {
            title: (
                "Roundpoint Mortgage Portal"
            ),
            content: (
                <div className="content">
                    <img className="content_image" src={roundpointGif} alt="">
                    </img>
                    <h3>The Roundpoint Mortgage Servicing Portal allows clients of Roundpoint to manage their loans and browse mortgage products.</h3>
                    <p>
                        My contributions:
                    </p>
                    <ul>
                        <li>Worked on refactoring and restyling components based on specs and designs</li>
                        <li>Added CSS animations to buttons to show loading.</li>
                        <li>Added components to storybook.</li>
                        <li>Added date limits to html native date-picker for payment scheduling.</li>
                        <li>Solved an touch screen bug involving collapsible menus.</li>
                    </ul>
                </div>
            ),
            button: {
                text: 'Visit Site',
                url: 'https://www.rpmservicing.com/',
            }
        },
        {
            title: "Linux Kernel Scheduler",
            content: (
                <div className="content">
                    <h3>A round robin scheduler for the linux kernel.</h3>
                    <p>This project was an exercise to get familiar with the overall structure of the kernel and the scheduling interface. This scheduler which implements no priority protocol and slows down the OS significantly.</p>
                </div>
            )
        },
        {
            title: "Coming Soon: Scattergories",
            content: (
                <div className="content">
                    <h3>An online version of the popular boardgame scattergories, soon to be deployed.</h3>
                    <p>This project uses a typescript react front-end and Django for database communication.</p>
                </div>
            )
        }
    ]
};

export const skills = {
    content: [
        {
            title:"Dynamic Front End",
            content: (
                <div className="content">
                    <h3>Building large scale applications with heavy Javascript and integrated API calls.</h3>
                    <p>I have worked on several highly interactive web applications with a variety of functionalities.
                     Most of my work in this area has leveraged React and Redux. I have built interactive components end to end
                     from component structure, to styling, to API calls.</p>
                </div>
            )
        },
        {
            title: "Responsive UI",
            content: (
                <div className="content">
                <img className="content_image" src={responsiveUI} alt="">
                    </img>
                    <h3>Using both Javascript and CSS to manage styles and functionality for different devices.</h3>
                    <p>A feature of all front-end projects I have worked on was adjusting styling and functionality for a variety of screen sizes. 
                    This involves manipulating page layouts and structures using CSS breakpoints and altering functionality in order to accomodate touch screens.</p>
                </div>
            )
        },
        {
            title: "Styling",
            content:(
                <div className="content">
                    <img className="content_image" src={stylingSample} alt="">
                    </img>
                    <h3>
                        Strong and flexible CSS styling abilities including animations and transitions.
                    </h3>
                    <p>
                        I have experience building out large scale CSS architectures, styling pages from scratch, and adding animations. I have a strong attention to detail and am excellent at matching design specifications.
                    </p>
                </div>
            )
        },
        {
            title:"Linux Kernel Development",
            content : (
                <div className="content">
                    <h3>
                        Familiarity with many of the basic structures of the Kernel and how to build basic operating system structures.
                    </h3>
                    <p>Aspects of Kernel I am familiar with:</p>
                    <ul>
                        <li>
                            Task Scheduling
                        </li>
                        <li>
                            File system structures
                        </li>
                        <li>
                            Address Translation
                        </li>
                        <li>
                            Interprocess Communication
                        </li>
                        <li>
                            POSIX standards (threads, semaphores, mutexes)
                        </li>
                    </ul>
                </div>
            )
        },
        {
            title: "Server and API development",
            content: (
                <div className="content">
                    <h3>
                        Experience building simple static servers and dynamic web APIs
                    </h3>
                    <p>Projects include:</p>
                    <ul>
                        <li>
                            Static website server in C.
                        </li>
                        <li>
                            Static server in R.
                        </li>
                        <li>
                            Scattergories API using Django.
                        </li>
                        <li>
                            Deeplinking server using Nodejs/Express for the National Rental Car webstie.
                        </li>
                    </ul>
                </div>
            )
        },
        {
            title: "Unit Testing",
            content: (
                <div className="content">
                    <h3>
                        Experience writing unit tests and working in large testing frameworks.
                    </h3>
                    <p>Migrated a large testing system from Mocha/Chai to Jest, and leveraged Jest's snapshot feature to check components and test large objects.</p>
                </div>
            )
        }
    ]

}