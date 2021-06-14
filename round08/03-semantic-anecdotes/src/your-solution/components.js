
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addAnecdote, voteAnecdote } from '../redux/reducer-anecdote'
import { setNotification, clearNotification } from '../redux/reducer-notification'
import { setFilter } from '../redux/reducer-filter'
import {
  Button,
  Segment,
  Input,
  Header,
  Modal,
  Icon,
  TextArea,
  Form,
  Message
} from 'semantic-ui-react'
//
// Notification
//

export const Notification = () => {
  const notification = useSelector(state => state.notification)
  if (!notification || !notification.userAction) {
    return (
      <></>
    )
  }
  else {
    return (
      <Message
        header={notification.userAction}
        content={'"' + notification.anecdote + '"'}>
      </Message>
    )
  }
}

//
// AnecdoteForm
//

export const AnecdoteForm = () => {

  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addAnecdote(e.target.content.value))
    e.target.content.value = ''
  }

  return (
    <Modal
      closeIcon
      trigger={<Button basic color='green'>New</Button>}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      size='small'
    >
      <Header icon='add' content='New Anecdote' />
      <Form onSubmit={handleSubmit}>
        <Modal.Content>
          <TextArea placeholder='Enter anecdote content here...' name='content' style={{ width: '90%' }}></TextArea>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' onClick={() => setOpen(false)}>
            <Icon name='remove' /> Cancel
          </Button>
          <Button basic color='green' type='submit'>
            <Icon name='checkmark' /> Create
          </Button>
        </Modal.Actions>
      </Form>
    </Modal>
  )

}

//
// AnecdoteList
//

export const AnecdoteList = () => {

  const filter = useSelector(state => state.filter).toLowerCase()

  const anecdotes = useSelector(state => state.anecdotes)
    .filter(anecdote => anecdote.content.toLowerCase().includes(filter))

  const dispatch = useDispatch()

  const notify = anecdote => {
    dispatch(setNotification(`you voted "${anecdote}"`))
    setTimeout(() => dispatch(clearNotification()), 5000)
  }

  const handleVoteClick = (id, anecdote) => () => {
    dispatch(voteAnecdote(id))
    notify(anecdote)
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <Segment.Group key={anecdote.content}>
          <Segment>
            <Header as="h3">{anecdote.content}</Header>
          </Segment>
          <Segment>
            <Header as="h4" color="grey">{anecdote.votes} votes </Header>
          </Segment>
          <Segment>
            <Button color="green" onClick={handleVoteClick(anecdote.id, anecdote.content)}>Vote</Button>
          </Segment>
        </Segment.Group>
      )}
    </div>
  )
}

//
// Filter
//

export const Filter = () => {

  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value))
  }

  return (
    <Input icon="search" placeholder="Search" onChange={handleChange} />
  )
}
