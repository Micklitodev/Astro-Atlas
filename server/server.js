const { ApolloServer } = require('apollo-server')

const db = require('./config/connection')
const {typeDefs, resolvers} = require('./graphql')
const { authMiddleware } = require('./utils/auth')

const PORT = process.env.PORT || 3001

const server = new ApolloServer({
  typeDefs,
  resolvers,
   context: authMiddleware
})

db.once('open', () => {
  console.log('success')
  return server.listen({port: PORT})
}) 