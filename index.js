const { buildSchema} = require('graphql');
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require('./Schemas/schema.graphql')
const {
    addUser,
getUsers,
updateUser,
removeUser
} = require('./Resolvers/resolver.graphql')
const connectDatabase = require('./db/db.config');

const rootValue = {
  post: (args) => addUser(args),
  get: () => getUsers(),
  update: (args) => updateUser(args),
  remove: (args) => removeUser(args),
};



const app = express()

app.use('/graphql', graphqlHTTP({schema, rootValue, graphiql: true}))

//initialize the database connection
connectDatabase();

app.listen(4000)

console.log("Running a GraphQL API server at http://localhost:4000/graphql");