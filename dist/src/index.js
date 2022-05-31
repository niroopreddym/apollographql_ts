"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { ApolloServer, gql } from 'apollo-server';
const { ApolloServer } = require('apollo-server');
const schema_1 = require("./graphql/schema");
const resolvers_1 = require("./graphql/resolvers");
const apolloServer = new ApolloServer({ typeDefs: schema_1.typeDefs, resolvers: resolvers_1.resolvers });
// apolloServer.listen().then((url: {url: string}) => {
//     console.log(`server listening at ${url}`);
// });
apolloServer.listen().then((response) => {
    console.log(response);
});
