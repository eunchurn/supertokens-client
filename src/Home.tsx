import React from "react";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import { useQuery, gql } from "@apollo/client";

const query = gql`
  query me {
    getMe {
      user_id
      recipe_id
      Post {
        id
      }
    }
  }
`;

export function Home() {
  const { data, loading, error } = useQuery(query, {
    fetchPolicy: "network-only",
  });
  console.log({ data, loading, error });
  const session = useSessionContext();
  return (
    <div>
      <div>User ID: {data?.getMe!.user_id}</div>
      <div>Recipe: {data?.getMe!.recipe_id}</div>
      <div>From Session: {JSON.stringify(session)}</div>
    </div>
  );
}
