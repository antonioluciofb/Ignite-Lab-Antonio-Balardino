import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o4ekp30i8701xmdnylcgnb/master",
  cache: new InMemoryCache(),
});
