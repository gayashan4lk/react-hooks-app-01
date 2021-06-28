import React, { Component } from "react";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    // lifecycle methods
    // componentDidMount() method runs after the component output has been rendered to the DOM.
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000);
    }

    // lifecycle methods
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        console.log("Clock rendered - props :",this.props);
        return (
            <div className="clock-container">
                <h4>Date from Props: </h4>
                <p>{this.props.date}</p>
                <hr/>
                <h4>Date from State :</h4>
                <p>{this.state.date.toLocaleString()}</p>
                <hr/>
            </div>
        );
    }
}
export default Clock;