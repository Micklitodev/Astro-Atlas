import { gql } from "@apollo/client";

export const LOG_IN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        savedBooks {
          bookId
          authors
          image
          link
          description
          title
        }
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($inputBook: InputBook!) {
    saveBook(InputBook: $inputBook) {
      _id
      username
      email
      saveBooks {
        bookId
        authors
        image
        link
        description
        title
      }
    }
  }
`

export const DEL_BOOK = gql`
mutation delBook($bookId: ID!){
  delBook(bookId: $bookId) {
    _id
    username
    email
    saveBook {
      bookId
      authors
      image
      link
      description
      title
    }
  }
}`