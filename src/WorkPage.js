import React from 'react';
import './styles/Work.scss';
import ExpandableCallout from "./ExpandableCallout";



function WorkPage(props){
    return (
        <div className="work_container">
            {
                props.content.map(x => <ExpandableCallout {...x}/>)
            }
        </div>
    )
}

export default WorkPage;
