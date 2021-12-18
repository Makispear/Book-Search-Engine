import { gql } from '@apollo/client'

export const QUERY_SINGLE_USER = gql`
  query user($username: String) {
    getSingleUser(username: $username) {
      _id
      username
      savedBooks {
        title
        bookId
        description
      }
    }
  }
`

