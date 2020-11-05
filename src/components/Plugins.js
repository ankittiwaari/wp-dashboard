import React, { Component } from "react";
import Plugin from "./Plugin";
class Plugins extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plugins: []
        }
    }
    componentDidMount() {
        this.fetchPlugins();
    }

    fetchPlugins() {
        const url = `${process.env.REACT_APP_BASE_URL}`;
        const options = {
            method: 'GET',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': `Basic ${process.env.REACT_APP_TOKEN}`
            }
        };

        fetch(url, options)
            .then(response => response.json())
            .then(res => {
                this.setState({
                    ...this.state,
                    plugins: res
                })
            })
            .catch(e => {
                console.log(e.message)
            })
    }
    render() {
        let list = this.state.plugins.map((plugin, index) => {
            return <Plugin key={index} pluginData={plugin} />
        })
        return (
            <div className="row">
                <div className="col-12">
                    {list}
                </div>
            </div>
        )
    }
}
export default Plugins