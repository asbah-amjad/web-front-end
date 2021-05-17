const { v1: uuid } = require('uuid')

// == DO NOT CHANGE THESE THREE LINES
const { basename } = require('path')
const dataPath = basename(__dirname) === 'your-solution' ? '../..' : '../../..'
let { authors, books } = require(`${dataPath}/library-data`)
// ==

// == ENTER COMMIT SHA OF YOUR REPO IN HERE 
const commitSHA = 'commit-sha-in-here';


const resolvers = {

  Author: {
    bookCount: (root) =>
      books.reduce(
        (count, book) => (book.author === root.name ? count + 1 : count), 0
      ),
  },

  Query: {
    bookCount: () => books.length,
    authorCount: () => authors.length,
    allBooks: () => books,
    allAuthors: () => authors,
  },

  Mutation: {
    addBook: (root, args) => {
      const book = { ...args, id: uuid() }
      books = books.concat(book)
      return book
    }
  }
}


// == DO NOT CHANGE THIS LINE
module.exports = { resolvers, commitSHA }
// ==
