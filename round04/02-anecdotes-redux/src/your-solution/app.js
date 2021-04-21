import React from 'react'
import { AnecdoteForm, AnecdoteList, Notification, Filter } from './components'

// ** enter commit sha of your repository in here **
export const commitSHA = '1ca2c5f';

export const App = () => {

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteForm />
      <AnecdoteList />
      <Filter />
    </div>
  )
}

export { default as store } from './store'