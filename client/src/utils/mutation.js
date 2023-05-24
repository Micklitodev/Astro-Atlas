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

    mutation saveBook($input: InputBook!) {
    saveBook (input: $input)
        {
            _id
            username
            email
            savedBooks {
                bookId
                authors
                image
                link
                title
                description
            }
        }
    }
`;


export const DEL_BOOK = gql`
mutation delBook($bookId: String!){
  delBook (bookId: $bookId) {
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
}`
