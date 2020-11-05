import React, { Component } from "react";
let Plugin = (props) => {

    let deletePlugin = (event) => {
        event.preventDefault();

    };
    console.log(props.pluginData)
    return (
        <div className="card Plugin my-3">
            <div className="card-body">
                <h5 className="card-title">{props.pluginData.name}</h5>
                <p className="card-text">
                    By <a href={props.pluginData.author_uri} target="_blank">{props.pluginData.author}</a> | <a href={props.pluginData.plugin_uri} target="_blank"> View plugin</a> | Version {props.pluginData.version}
                </p>
                <p className="card-text">
                    {(props.pluginData.status === 'active') ? <a href="#">Deactivate</a> : <a href="#">Activate</a>}
                </p>
            </div>
        </div>
    )
}
export default Plugin