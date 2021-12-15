const { gql } = require('apollo-server-express')

// create typeDefs
const typeDefs = gql`
  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
  }
`

module.exports = typeDefs
