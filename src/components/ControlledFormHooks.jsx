import React, {useState} from 'react'

function ControlledFormHooks() {
    const [name, setName] = useState('')
    const [comments, setComments] = useState('')
    const [category, setCategory] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments)
    }

  return (
    <div>
        <h2>Please fill out the form below:</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="id-name">Your Name:</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="id-name"
                        name="name"
                        type="text"
                    />
                    </div>
                    <div>
                    <label htmlFor="id-category">Query category:</label>
                    <select name="category" id="id-category"
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                            >
                        <option value="website">Website Issue</option>
                        <option value="order">Order Issue</option>
                        <option value="general">General Inquiry</option>
                    </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments:</label>
                        <textarea name="comments" id="id-comments" cols="30" rows="10"
                                  value={comments}
                                  onChange={(e) => setComments(e.target.value)} />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
  )
}

export default ControlledFormHooks