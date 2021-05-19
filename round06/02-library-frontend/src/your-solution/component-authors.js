import React, { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client';
import Select from 'react-select';
import { EDIT_AUTHOR, ALL_AUTHORS } from './gql'

const POLL_INTERVAL = 3000

const Authors = (props) => {
  const result = useQuery(ALL_AUTHORS, { pollInterval: POLL_INTERVAL })
  const [name, setName] = useState('')
  const [born, setBorn] = useState('')
  const [selectedAuthor, setSelectAuthor] = useState('')

  const [editAuthor] = useMutation(EDIT_AUTHOR)

  const submit = async (event) => {
    event.preventDefault()

    editAuthor({
      variables: { name, born: Number(born) }
    })

    setTimeout(() => {
      if (result.loading) {
        authors = result.data.allAuthors
      }
    }, 500)
  }

  if (!props.show) {
    return null
  }

  if (result.loading) {
    return <div>loading...</div>
  }
  let authors = result.data.allAuthors
  const authorsNames = authors.map(author => {
    return { value: author.name, label: author.name }
  })

  const authorChanged = (value) => {
    setSelectAuthor(value)
    setName(value.value)
  }


  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              born
            </th>
            <th>
              books
            </th>
          </tr>
          {props.authors.map(a =>
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          )}
        </tbody>
      </table>

      <h2>Set birthyear</h2>
      <form onSubmit={submit}>
        <div>
          name
            <Select
            name='author-name'
            value={selectedAuthor}
            options={authorsNames}
            onChange={authorChanged}
          >
          </Select>

        </div>
        <div>
          born <input
            type='number'
            value={born}
            onChange={({ target }) => setBorn(target.value)}
          />
        </div>
        <button type='submit'>update author</button>
      </form>
    </div>
  )
}

export default Authors