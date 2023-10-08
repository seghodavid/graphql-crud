const { buildSchema} = require('graphql');
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require('./Schemas/schema.graphql')
const resolver = require('./Resolvers/resolver.graphql')

const rootValue ={
    post: (id, name) => resolver.addUser(id, name),
    get: () => resolver.getUsers(),
    updateUser: (id,name, newId, newName) => resolver.updateUser(id, name, newId, newName),
    deleteUser: (id,name) => resolver.deleteUser(id,name),
}


const app = express()

app.use('/graphql', graphqlHTTP({schema, rootValue, graphiql: true}))

app.listen(4000)

console.log("Running a GraphQL API server at http://localhost:4000/graphql");