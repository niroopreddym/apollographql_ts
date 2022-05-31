"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_1 = require("apollo-server");
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
exports.typeDefs = (0, apollo_server_1.gql) `
    type Location {
      locationID: Int
      name: String
    }

    type Service {
      serviceID: Int
      sname: String
    }

    type Organisation {
      locations: [Location]
      services: [Service]
    }

    type Query {
      organisations: [Organisation]
    }
  `;
