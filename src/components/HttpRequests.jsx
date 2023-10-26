import React, { Component } from 'react';
import axios from 'axios';

export class HttpRequests extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: []
      }
    }

    componentDidMount() {
        // Now we want to make the API request, THEN setState to put the data into the state.
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response =>{
            console.log(response)
            this.setState({
                posts: Array.isArray(response.data) ? response.data : [response.data]
        })
        })
        .catch(error => {
            this.setState({error: error.message})
        })
    }

  render() {
    const posts = this.state.posts;

    return (
      <div>
        <h2>Posts:</h2>
       {posts.length ? (posts.map(post => (
        <div key={post.id}>
            <h2>{post.id}. {post.title}</h2>
            <h4>Posted by user: {post.userId}</h4>
            <p>{post.body}</p>
        </div>
       ))) : (
        this.state.error ? <p>{this.state.error}</p> 
                         : <h4>Loading posts...</h4>
       )}

      </div>
    )
  }
}

export default HttpRequests