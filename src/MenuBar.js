import React from 'react';
import {Link} from 'react-router-dom';
import './styles/MenuBar.scss';
import hamburger from './images/hamburger.svg';
class MenuBar extends React.Component {

  render(){
    return (
        <div className="menubar_container">
            <span className="menubar_icon">
                Hugo <img className="menubar_icon_photo" src={hamburger} alt=""/> Zoells
            </span>
            <Link className="menubar_item" to="/contact">
                Hugo Zoells
            </Link>
            <Link className="menubar_item menubar_item_page" to="/experience">
                Experience
            </Link>
            <Link className="menubar_item menubar_item_page" to="/work">
                Work Samples
            </Link>
            <Link className="menubar_item menubar_item_page" to="/personal">
                Hobbies
            </Link>

        </div>
    );
  }
}

export default MenuBar;
