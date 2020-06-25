//create a scroll component so that heading stays visible
import React from 'react';
//scroll can use children as a way to render its children

const Scroll = (props) => {
    return (
        //create a style inside the object with double curly brackets
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
            {props.children}   
        </div>
    )
};

export default Scroll;