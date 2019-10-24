import React from "react";
import "./header.css";


const header = props => (
    <div className="header">
        <div className="title">{props.children}</div>
        <div className="scores">
            Score: {props.score} Topscore: {props.topscore}
        </div>
    </div>
);

export default header;