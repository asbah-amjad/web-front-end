
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { votesOf, createNew } from './anecdoteReducer'

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
  const anecdotes = useSelector(state => state)

  const vote = (id, votes) => {
    console.log('vote', id)
    dispatch(votesOf(id, votes))
  }

  return (
    <div>
      {[...anecdotes]
        .sort((a, b) =>
          (b.votes >= 0 ? b.votes : 0) - (a.votes >= 0 ? a.votes : 0)
        )
        .map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id, anecdote.votes)}>vote</button>
            </div>
          </div>
        )}
    </div>
  )
}

export const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      render here notification...
    </div>
  )
}




