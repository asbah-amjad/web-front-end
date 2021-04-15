import React from 'react'
import { AnecdoteForm, AnecdoteList } from './components'


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

export { default as store } from './store'