import React from 'react';
import "./styles/ExpandableCallout.scss"
import Button from './Button';
class ExpandableCallout extends React.Component{
    constructor(props){
        super(props);
        this.state={
            open:false,
        }
        this.showContent=this.showContent.bind(this);
    }
    showContent(){
        this.setState({open:!this.state.open});
        console.log(this.state.open);
    }
    
    render() {
        return (
            <div className={`callout_container ${this.state.open && "show"}`}>
                <div className="callout_title">
                    {this.props.title}
                </div>
                <div className="callout_content_container">
                    <div className={`callout_accordion ${this.state.open && 'show'}`}>
                        <div className={`callout_content`}>
                            {this.props.content}
                        </div>
                    </div>
                    <div className="callout_button_container">
                        {this.props.button && this.state.open && <Button text={this.props.button.text} click={()=>window.open(this.props.button.url,'_blank')}/>
                        }
                        <Button text={`${this.state.open?"See Less":"See More"}`} click={this.showContent.bind(this)}/>
                    </div>
                </div>
                

            </div>
        )
    }
}
export default ExpandableCallout;
