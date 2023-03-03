import { cacheExchange, dedupExchange, fetchExchange } from "urql";


const graphql_api = process.env.GRAPHQL_API as string



export const createUrqlClient = (ssrExchange: any) => ({
  
  url: graphql_api,
  exchanges: [dedupExchange, cacheExchange, ssrExchange, fetchExchange],
});