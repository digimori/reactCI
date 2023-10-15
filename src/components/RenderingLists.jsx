import React from 'react'

function RenderingLists() {
    const bookList = [
        'To kill a mockingbird',
        'Kafka on the shore',
        'Keep the Aspidistra Flying'
    ]
  return (
    <div>
        {bookList.map(
            book => {
                return <h2>{book}</h2>
            }
        )}


    </div>
  )
}

export default RenderingLists