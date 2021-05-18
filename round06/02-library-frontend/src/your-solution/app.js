
import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import Authors from './component-authors'
import Books from './component-books'
import NewBook from './component-new-book'
import { ALL_AUTHORS, ALL_BOOKS } from './gql'

// ** enter commit sha of your repository in here **
export const commitSHA = '-commit-sha-in-here-';


export const App = () => {
  const [page, setPage] = useState('authors')

  const result = useQuery(ALL_AUTHORS)
  const book_result = useQuery(ALL_BOOKS)

  if (result.loading) {
    return <div>loading...</div>
  }
  if (book_result.loading) {
    return <div>loading...</div>
  }

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
      </div>

      <Authors
        show={page === 'authors'} authors={result.data.allAuthors}
      />

      <Books
        show={page === 'books'} books={book_result.data.allBooks}
      />

      <NewBook
        show={page === 'add'}
      />

    </div>
  )
}
