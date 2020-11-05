import React, { Component } from "react";
let Plugin = (props) => {

    let deletePlugin = (event)=>{
        event.preventDefault();
        
    };

    return <div className="Plugin">
        <p className="Plugin__name">{props.pluginData.name}</p>
        <div className="Plugin__actions">
            <button onClick={(event) =>  deletePlugin(event)}>Delete</button>
        </div>
    </div>
}
export default Plugin