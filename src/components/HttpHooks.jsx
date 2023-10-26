import React, { useState, useEffect } from 'react'
import axios from 'axios'

function HttpHooks() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [postMessage, setPostMessage] = useState(null)

    const postToAPI = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts',
            {
                title: 'Hello there!',
                body: 'Is this thing on?',
                userId: 123
            })
            .then(response => {
                setPostMessage(response.status === 201 ? `Success! Title: ${response.data.title}` : 'Failed')
            })
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                console.log(response)
                const data = Array.isArray(response.data)
                    ? response.data
                    : [response.data]
                setPosts(data);
            })
            .catch(error => {
                setError(error.message)
            })
    }, [])

    return (
        <div>
            <button onClick={postToAPI}>Create Post</button>
            <p>{postMessage}</p>

            <h2>Posts:</h2>
            {posts.length ? (posts.map(post => (
                <div key={post.id}>
                    <h2>{post.id}. {post.title}</h2>
                    <h4>Posted by user: {post.userId}</h4>
                    <p>{post.body}</p>
                </div>
            ))) : (
                error ? <p>{error}</p>
                    : <h4>Loading posts...</h4>
            )}

        </div>
    )
}

export default HttpHooks