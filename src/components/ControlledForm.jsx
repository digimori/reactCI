import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             category: 'website',
             comments: ''
        }
    }
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleTextChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleCheckbox = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault(); // Prevents default form behaviour - refresh
    }

    render() {
        return (
            <div>
                <h2>Please fill out the form below:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <label htmlFor="id-name">Your Name:</label>
                    <input
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        id="id-name"
                        name="name"
                        type="text"
                    />
                    </div>
                    <div>
                    <label htmlFor="id-category">Query category:</label>
                    <select name="category" id="id-category"
                            onChange={this.handleCheckbox}
                            value={this.state.category}
                            >
                        <option value="website">Website Issue</option>
                        <option value="order">Order Issue</option>
                        <option value="general">General Inquiry</option>
                    </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments:</label>
                        <textarea name="comments" id="id-comments" cols="30" rows="10"
                                  value={this.state.comments}
                                  onChange={this.handleTextChange} />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default ControlledForm