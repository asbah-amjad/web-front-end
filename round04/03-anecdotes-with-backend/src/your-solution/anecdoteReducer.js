const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'VOTE':
      return state.map((item, index) => {
        // Find the item with the matching id
        if (item.id === action.data.id) {
          // Return a new object
          return {
            ...item,  // copy the existing item
            votes: action.data.votes + 1  // replace the vote
          }
        }
        // Leave every other item unchanged
        return item;
      });
    case 'CREATE_NEW':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export const votesOf = (id, votes) => {
  return {
    type: 'VOTE',
    data: {
      id,
      votes,
    }
  }
}

export const createNew = (data) => {
  return {
    type: 'CREATE_NEW',
    data,
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_NOTES',
    data: anecdotes,
  }
}

export default anecdoteReducer