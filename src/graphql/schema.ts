import {gql} from "apollo-server";

  // A schema is a collection of type definitions (hence "typeDefs")
  // that together define the "shape" of queries that are executed against
  // your data.
  export const typeDefs =  gql`
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
