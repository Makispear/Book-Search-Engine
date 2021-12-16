const { gql } = require('apollo-server-express')

// create typeDefs
const typeDefs = gql`
  type Books {
    author: [User]
    description: String
    bookId: ID
    image: String
    link: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID
    username: String
    books: [Books]
  }

  type Query {
    me: User
    getSingleUser(_id: ID, username: String): User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
  `

module.exports = typeDefs
