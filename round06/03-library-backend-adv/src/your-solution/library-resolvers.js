
// == DO NOT CHANGE THESE THREE LINES
const { UserInputError, AuthenticationError, PubSub } = require('apollo-server')
const { v1: uuid } = require('uuid');
const { basename } = require('path')
const dataPath = basename(__dirname) === 'your-solution' ? '../..' : '../../..'
let { authors, books, users } = require(`${dataPath}/library-data`)
const {
  validateUser,
  validateGenre,
  validateLogin,
  getToken,
  getCurrentUser } = require('./utils')
// ==

// == ENTER COMMIT SHA OF YOUR REPO IN HERE 
const commitSHA = '1ca2c5f';
const pubsub = new PubSub();
const TOPIC_BOOK_ADDED = "BOOK_ADDED";

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
    me: (_root, _args, { token }) => {
      return getCurrentUser(token, users);
    },
    allUsers: () => users,
  },

  Mutation: {
    addBook: (_root, book, { token }) => {
      if (!getCurrentUser(token, users)) {
        throw new AuthenticationError("Invalid User");
      }
      book.genres.map((genre) => {
        if (!validateGenre(genre)) {
          throw new UserInputError(
            "Genre must be string and more than 3 characters",
            {
              invalidArgs: genre,
            }
          );
        }
      });

      if (!validateGenre(book.title)) {
        throw new UserInputError(
          "Invalid title: Title must be more than 3 characters"
        );
      }
      const newBook = { ...book, id: uuid() };
      books = books.concat(newBook);
      if (!authors.find((author) => author.name === book.author)) {
        authors = authors.concat({ name: book.author, id: uuid() });
      }
      pubsub.publish(TOPIC_BOOK_ADDED, { bookAdded: newBook });
      return newBook;
    },
    editAuthor: (_root, { name, setBornTo }, { token }) => {
      if (!getCurrentUser(token, users)) {
        throw new AuthenticationError("Invalid User");
      }
      const editAuthor = authors.find((author) => author.name === name);

      if (!editAuthor) return null;
      editAuthor.born = setBornTo;
      authors = authors.map((author) =>
        author.id === editAuthor.id ? editAuthor : author
      );
      return editAuthor;
    },
    createUser: (_root, args) => {
      const newUser = { ...args, id: uuid() };
      if (!validateUser(args.username, users))
        throw new UserInputError("Username is invlaid");
      if (!validateGenre(args.favoriteGenre))
        throw new UserInputError("favorite genre is invlaid");
      users = users.concat(newUser);

      return newUser;
    },

    login: (_root, { username, password }) => {

      if (!validateLogin(username, password, users)) {
        throw new UserInputError("Invalid Credential");
      }
      const user = users.find((user) => user.username === username);
      return { value: getToken(user) };
    },
  },
  Subscription: {
    bookAdded: {
      subscribe: () => pubsub.asyncIterator(TOPIC_BOOK_ADDED),
    },
  },
};


// == DO NOT CHANGE THIS LINE
module.exports = { resolvers, commitSHA }
// ==
