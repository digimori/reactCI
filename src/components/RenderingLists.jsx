import React from 'react'
import Book from './Book'

function RenderingLists(props) {
    const bookObject = [{
        title: 'Gyo',
        author: 'Junji Ito',
        noOfPages: 405
    },
{
    title: 'To kill a mockingbird',
    author: 'Harper Lee',
    noOfPages: 281
},
{
    title: 'Windup bird chronicle',
    author: 'Haurki Murakami',
    noOfPages: 607
}]


  return (
    <div>
        {bookObject.map(
            book => {
                return (
                    <Book key={book.title} book={book}/>
                        )
            }
        )}


    </div>
  )
}

export default RenderingLists