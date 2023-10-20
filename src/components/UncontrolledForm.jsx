import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
      this.inputName = React.createRef();
      this.inputComment = React.createRef();
      this.inputCategory = React.createRef();
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
                        id="id-name"
                        name="name"
                        type="text"
                        ref={this.inputName}
                        defaultValue="Enter your Name..."
                    />
                    </div>
                    <div>
                    <label htmlFor="id-category">Query category:</label>
                    <select name="category" id="id-category"
                            ref={this.inputCategory}
                            >
                        <option value="website">Website Issue</option>
                        <option value="order">Order Issue</option>
                        <option value="general">General Inquiry</option>
                    </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments:</label>
                        <textarea name="comments" id="id-comments" cols="30" rows="10"
                                  ref={this.inputComment}
                                  defaultValue="Please Enter your Message"
                                 />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default ControlledForm