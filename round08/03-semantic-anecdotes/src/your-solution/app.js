import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import { AnecdoteForm, AnecdoteList, Notification, Filter } from './components'
import { Container, Segment, Header, Grid } from 'semantic-ui-react'

export { default as store } from '../redux/store'
// ** enter commit sha of your repository in here **
export const commitSHA = '1ca2c5f';

export const App = () => {
  return (
    <Container>
      <Notification />
      <Segment>
        <Grid columns='equal'>
          <Grid.Column width={2}>
            <Header as="h2">Anecdotes</Header>
          </Grid.Column>
          <Grid.Column width={10}>
            <AnecdoteForm />
          </Grid.Column>
          <Grid.Column>
            <Filter />
          </Grid.Column>
        </Grid>
      </Segment>

      <AnecdoteList />
    </Container>
  )
}
