import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";
import SuperTokens, {
  SuperTokensWrapper,
  getSuperTokensRoutesForReactRouterDom,
} from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import { ApolloClientProvider } from "./ApolloProvider";
import { Home } from "./Home";

SuperTokens.init({
  appInfo: {
    appName: "auth",
    apiDomain: "http://localhost:8000",
    websiteDomain: "http://localhost:3001",
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [EmailPassword.init(), Session.init()],
});

function App() {
  return (
    <SuperTokensWrapper>
      <ApolloClientProvider>
        <BrowserRouter>
          <Routes>
            {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ApolloClientProvider>
    </SuperTokensWrapper>
  );
}

export default App;
