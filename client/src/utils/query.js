import { gql } from "@apollo/client";

export const GET_CURRUSER = gql`
  {
    currUser {
      _id
      username
      email
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
