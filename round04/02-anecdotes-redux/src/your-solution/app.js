import React from 'react'
import { createStore } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import reducer from './anecdoteReducer'
import { votesOf, createNew } from './anecdoteReducer'

export const store = createStore(reducer)

// ** enter commit sha of your repository in here **
export const commitSHA = '-commit-sha-in-here-';

export const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id, votes) => {
    console.log('vote', id)
    dispatch(votesOf(id, votes))
  }

  const addVote = (event) => {
    event.preventDefault()
    const content = event.target.vote.value
    event.target.vote.value = ''
    dispatch(createNew(content))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
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
      <h2>create new</h2>
      <form onSubmit={addVote}>
        <input name="vote" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}
