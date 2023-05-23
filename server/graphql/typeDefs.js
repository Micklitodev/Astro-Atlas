const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: String
    description: String
    image: String
    link: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input InputBook {
    authors: String
    description: String
    image: String
    link: String
    title: String
  }


  type Query {
    currUser: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(InputBook: InputBook!): User
    delBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
