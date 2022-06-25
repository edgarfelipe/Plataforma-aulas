import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient ({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4p0udxq1jrz01xk9oac5u58/master',
  headers: {
   },
  cache: new InMemoryCache()
})

/*  uri: import.meta.env.VITE_API_URL,
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
  },
*/