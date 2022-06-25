import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient ({
  uri: 
   },
  cache: new InMemoryCache()
})

/*  uri: import.meta.env.VITE_API_URL,
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
  },
*/