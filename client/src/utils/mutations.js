import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation CreateUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`
export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        _id
      }
      token
    }
  }
`
export const SAVE_BOOK = gql`
  mutation SaveBook($bookId: String!, $description: String!, $title: String!) {
    saveBook(bookId: $bookId, description: $description, title: $title) {
      savedBooks {
        description
        title
        bookId
      }
    }
}
`

export const DELETE_BOOK = gql`
  mutation DeleteBook($bookId: String!) {
    deleteBook(bookId: $bookId) {
      savedBooks {
        description
        title
        bookId
      }
    }
  }
`
