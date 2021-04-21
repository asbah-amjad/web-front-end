
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { votesOf, createNew } from './anecdoteReducer'
import { notifyChange, notifyClear } from './notificationReducer'
import { filterChange } from './filterReducer'

export const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addVote = (event) => {
    event.preventDefault()
    const content = event.target.vote.value
    event.target.vote.value = ''
    dispatch(createNew(content))
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addVote}>
        <input name="vote" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter).toLowerCase()

  const vote = (id, votes) => {
    console.log('vote', id)
    dispatch(votesOf(id, votes))
  }

  const notification = (content) => {
    dispatch(notifyChange(`you voted '${content}'`))
    setTimeout(() => {
      dispatch(notifyClear())
    }, 5000)
  }

  return (
    <div>
      {[...anecdotes]
        .sort((a, b) =>
          (b.votes >= 0 ? b.votes : 0) - (a.votes >= 0 ? a.votes : 0)
        ).filter(a => a.content.toLowerCase().includes(filter))
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => {
                vote(anecdote.id, anecdote.votes)
                notification(anecdote.content)
              }
              }>vote</button>
            </div>
          </div>
        )}
    </div>
  )
}


export const Notification = () => {

  const notification = useSelector(state => state.notify)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export const Filter = () => {
  const dispatch = useDispatch()

  const handleFilterChange = (event) => {

    dispatch(filterChange(event.target.value))
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleFilterChange} />
    </div>
  )
}



