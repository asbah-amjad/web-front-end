import React from 'react'
import { createStore } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import reducer from './anecdoteReducer'
import { votesOf } from './anecdoteReducer'

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

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
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
      <form>
        <div><input /></div>
        <button>create</button>
      </form>
    </div>
  )
}
