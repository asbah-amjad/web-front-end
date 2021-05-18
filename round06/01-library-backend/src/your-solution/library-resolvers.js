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
    allBooks: (root, args) => {
      if (args.author && args.author.length > 0) {
        return books.filter(book => book.author === args.author)
      }
      else if (args.genre && args.genre.length > 0) {
        return books.filter(book => book.genres.includes(args.genre))
      }
      else {
        return books
      }
    },
    allAuthors: () => authors,
  },

  Mutation: {
    addBook: (root, args) => {
      const book = { ...args, id: uuid() }
      books = books.concat(book)
      return book
    },
    editAuthor: (root, args) => {
      const author = authors.find(p => p.name === args.name)
      if (!author) {
        return null
      }

      const updatedAuthor = { ...author, born: args.born }
      authors = authors.map(p => p.name === args.name ? updatedAuthor : p)
      return updatedAuthor
    }
  }
}


// == DO NOT CHANGE THIS LINE
module.exports = { resolvers, commitSHA }
// ==
