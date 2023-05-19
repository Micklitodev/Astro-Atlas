import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    currUser {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
`;
