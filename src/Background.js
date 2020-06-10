import React from 'react';
import './styles/Background.scss';

class Background extends React.Component {
  renderDivs(n){
    return (
      <li key={n}>
            <div class="hexagon"></div>
      </li>
    );
  }

  render(){
    return (
      <div className="background_container">
        <ul id="grid" class="clear">
        {
          Array.from(Array(350).keys()).map(x=>this.renderDivs(x))
        }

        </ul>
      </div>
    );
  }
}

export default Background;
