import { organisations } from "../../database/mockdb";


export const resolvers = {
  Query: {
    organisations: () => organisations,
  },
};
