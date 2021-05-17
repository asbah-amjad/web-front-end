
const { gql } = require('apollo-server')


const typeDefs = gql`
  type Author {
    name: String!
    born: String!
    bookCount: Int
    id: ID! 
  }
  type Book {
    title: String!
    published: String!
    author: String!
    genres: [String!]!
    id: ID!
  }
  type Query {
    bookCount: Int!
    authorCount: Int!
    allBooks: [Book!]!
    allAuthors: [Author!]!
  }
`


module.exports = { typeDefs }

