const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    _id: ID!
    bookId: String
    authors: [String]
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
    bookId: String
    authors: [String]
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
    saveBook(input: InputBook!): User
    delBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
