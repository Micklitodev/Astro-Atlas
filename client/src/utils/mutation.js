import { gql } from "@apollo/client";

export const Login_User = gql`
  mutation logIn($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const Create_User = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        usernameemail
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
