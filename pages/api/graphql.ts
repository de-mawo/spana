import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { createContext } from '../../graphql/context';
import {schema} from '../../graphql/schema'



const server = new ApolloServer({
  schema
});

export default startServerAndCreateNextHandler(server, {
  context: async (req, res) => await createContext({req, res})
});

