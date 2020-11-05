import React, { Component } from "react";

class Timer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                ...this.state,
                time: new Date().toLocaleTimeString()
            })
        }, 1000);
    }

    componentDidUpdate(){
        console.log(this.state.time);
    }

    render() {
        return (
            <div className="timer">{this.state.time}</div>
        );
    }
}

export default Timer;