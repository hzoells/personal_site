import React from 'react';
import {Link} from 'react-router-dom';
import './styles/MenuBar.scss';
import hamburger from './images/hamburger.svg';
class MenuBar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            menuOpen:false
        }
        this.toggleMenu=this.toggleMenu.bind(this);
    }
    toggleMenu(){
        this.setState({
            menuOpen: !this.state.menuOpen
        });
    }

    render(){
        return (
            <div className={`menubar_container ${this.state.menuOpen?'accordion':''}`}>
                <span className="menubar_icon" onClick={this.toggleMenu}>
                    Hugo <img className="menubar_icon_photo" src={hamburger} alt=""/> Zoells
                </span>
                <Link className={`menubar_item menubar_item_page ${this.state.menuOpen ? "show":""}`} to="/contact" onClick={this.toggleMenu}>
                    Hugo Zoells
                </Link>
                <Link className={`menubar_item menubar_item_page ${this.state.menuOpen ? "show":""}`} to="/experience" onClick={this.toggleMenu}>
                    Experience
                </Link>
                <Link className={`menubar_item menubar_item_page ${this.state.menuOpen ? "show":""}`} to="/work" onClick={this.toggleMenu}>
                    Work Samples
                </Link>
                <Link className={`menubar_item menubar_item_page ${this.state.menuOpen ? "show":""}`} to="/personal" onClick={this.toggleMenu}>
                    Hobbies
                </Link>
            </div>
        );
    }
}

export default MenuBar;
