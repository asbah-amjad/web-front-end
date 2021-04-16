import React, { useEffect } from 'react'
import { AnecdoteForm, AnecdoteList, Notification, Filter } from './components'
import anecdoteService from './services'
import { initializeAnecdotes } from './anecdoteReducer'
import { useDispatch } from 'react-redux'

// ** enter commit sha of your repository in here **
export const commitSHA = '-commit-sha-in-here-';

export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService
      .getAll().then(notes => dispatch(initializeAnecdotes(notes)))
  }, [dispatch])

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