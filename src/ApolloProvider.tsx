import React from "react";
import { ApolloProvider } from "@apollo/client";
import { InMemoryCache, ApolloClient } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:8000",
  cache: new InMemoryCache(),
});

export function ApolloClientProvider(props: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
