import React, { Component } from 'react'
import axios from 'axios'

export class HttpPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         apiResponse: null
      }
    }

    postToAPI = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts',
        {
            title: 'Hello there!',
            body: 'Is this thing on?',
            userId: 123
        })
        .then(response => {
            this.setState({ apiResponse: response.data})
        })
    }


  render() {
    const {apiResponse} = this.state;

    return (
      <div>
        <button onClick={this.postToAPI}>Create Post</button>

        {apiResponse ? (
            <div>
                <h1>{apiResponse.title}</h1>
                <h4>Posted by: {apiResponse.userId}</h4>
                <p>Post: {apiResponse.body}</p>
            </div>
        ): (
        <p>Please click the button above</p>)}
      </div>
    )
  }
}

export default HttpPost