import React from 'react';
import './jumbotron.css';

function Jumbotron(props) {
    return (
        <div className='jumbotron' style={{flexDirection:props.reverse?'row-reverse':'row'}}>
            <div className="jumbotron-text">
                <h2 className="jumbotron-text-heading">
                {props.heading}
                </h2>
                <h3 className="jumbotron-text-subheading">
                    {props.sub}
                </h3>
            </div>
            <img className='jumbotron-image' src={props.image} alt="" />
        </div>
    )
}

export default Jumbotron
