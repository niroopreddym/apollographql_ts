// import { ApolloServer, gql } from 'apollo-server';
const {ApolloServer} = require('apollo-server');
import { typeDefs } from "./graphql/schema";
import {resolvers} from "./graphql/resolvers";


const apolloServer = new ApolloServer({ typeDefs, resolvers });

// apolloServer.listen().then((url: {url: string}) => {
//     console.log(`server listening at ${url}`);
// });


apolloServer.listen().then((response: object) => {
    console.log(response)
})
