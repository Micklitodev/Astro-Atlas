const { ApolloServer } = require('apollo-server')

const db = require('./config/connection')
const {typeDefs, resolvers} = require('./graphql')

const server = new ApolloServer({
  typeDefs,
  resolvers
})

db.once('open', () => {
  console.log('sucess')
  return server.listen({port: 4000})
}) 