const express = require('express')
const { graphql, buildSchema } = require('graphql')
const graphqlHTTP = require('express-graphql')
const cors = require('cors');

const app = express()
app.use(cors())

const schema = buildSchema(`
  type Query {
    language: String
  }
`)

const rootValue = {
  language: () => 'GraphQL'
}

app.use('/graphql', graphqlHTTP({
  rootValue, schema, graphiql: true
}))
app.listen(4000, () => console.log('Listening on 4000'))
