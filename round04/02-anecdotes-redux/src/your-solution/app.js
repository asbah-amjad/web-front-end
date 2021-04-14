import React from 'react'
import { createStore } from 'redux'
import reducer from './anecdoteReducer'
import { AnecdoteForm, AnecdoteList } from './components'

export const store = createStore(reducer)

// ** enter commit sha of your repository in here **
export const commitSHA = '-commit-sha-in-here-';

export const App = () => {

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}
