import React, { component } from 'react'

class EventBinding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: 'Hello',
            buttonText: 'Exit'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    /*
    handleClick() {
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Enter",
        })
    }*/

    /* The above but refining the handler as an arrow function */
    handleClick = () => {
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Enter",
        })
    } 
    
    render() {
        return (
            <div>
                <h1>{this.state.introduction}</h1>

                {/* on click event with an anonymous function - utilizing arrow functions 
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>*/}

                {/* Onclick event utilizing the bind() method and this keyword 
                <button onClick={this.handleClick.bind(this)}>{this.state.buttonText}</button>*/}

                {/* After defining the click event in the constructor, the following can be used: This stops it re-rendering each time, better for larger apps */}
                <button onClick={this.handleClick}>{this.state.buttonText}</button>
            
            </div>
        )
    }
}

export default EventBinding