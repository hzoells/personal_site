import React from 'react';
import {Link} from 'react-router-dom';
import './styles/MenuBar.scss';
import hamburger from './images/hamburger.svg';
class MenuBar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            menuOpen:false,
            contact: false,
            experience: false,
            work: false,
            hobbies: false,
        }
        this.toggleMenu=this.toggleMenu.bind(this);
        this.toggleItems=this.toggleItems.bind(this);
    }
    toggleMenu(){
        this.setState({
            menuOpen: !this.state.menuOpen
        });
    }
    toggleItems(item){
        switch(item){
            case "contact":
                this.setState({
                    menuOpen:false,
                    contact: true,
                    experience: false,
                    work: false,
                    hobbies: false,
                });
                break;
            case "experience":
                this.setState({
                    menuOpen:false,
                    contact: false,
                    experience: true,
                    work: false,
                    hobbies: false,
                });
                break;
            case "work":
                this.setState({
                    menuOpen:false,
                    contact: false,
                    experience: false,
                    work: true,
                    hobbies: false,
                });
                break;
            case "hobbies":
                this.setState({
                    menuOpen:false,
                    contact: false,
                    experience: false,
                    work: false,
                    hobbies: true,
                });
                break;
            default:
                break;
        }
    }

    render(){
        return (
            <div className="menubar">
                <div className={`menubar_container ${this.state.menuOpen?'accordion':''}`}>
                    <span className="menubar_icon" onClick={this.toggleMenu}>
                        H <img className="menubar_icon_photo" src={hamburger} alt=""/> Z
                    </span>
                    <div className="menubar_item_container">
                        <Link className={`menubar_item menubar_item_page ${this.state.contact && "open"} ${this.state.menuOpen && "show"}`} to="/contact" onClick={()=>this.toggleItems("contact")}>
                            HUGO ZOELLS
                        </Link>
                    </div>
                    <div className="menubar_item_container">
                        <Link className={`menubar_item menubar_item_page ${this.state.experience && "open"} ${this.state.menuOpen && "show"}`} to="/experience" onClick={()=>this.toggleItems("experience")}>
                            EXPERIENCE
                        </Link>
                    </div>
                    <div className="menubar_item_container menubar_work">
                        <div className={`menubar_item menubar_item_page ${this.state.work && "open"} ${this.state.menuOpen && "show"}`}>
                            WORK SAMPLES
                        </div>
                        <div className="menubar_subitem_container">
                            <Link className={`menubar_subitem`} to="/projects" onClick={()=>this.toggleItems("work")}>
                                Projects
                            </Link>
                            <Link className={`menubar_subitem`} to="/skills" onClick={()=>this.toggleItems("work")}>
                                Skills
                            </Link>
                        </div>
                    </div>
                    <div className="menubar_item_container">
                        <Link className={`menubar_item menubar_item_page ${this.state.hobbies && "open"} ${this.state.menuOpen && "show"}`} to="/personal" onClick={()=>this.toggleItems("hobbies")}>
                            HOBBIES
                        </Link>
                    </div>
                </div>
                <div className="menubar_buffer"/>
            </div>
        );
    }
}

export default MenuBar;
