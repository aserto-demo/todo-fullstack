import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { LoginWrapper } from "./LoginWrapper";
import { AuthProvider } from "oidc-react";

const configuration = {
  authority: `https://acmecorp.demo.aserto.com/dex`,
  clientId: "acmecorp-app",
  autoSignIn: true,
  responseType: "id_token",
  scope: "openid profile email",
  redirectUri: window.location.origin,
  audience: "acmecorp-app",
  onSignIn: () => {
    window.location.replace(window.location.origin);
  },
};

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider {...configuration}>
      <LoginWrapper />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
