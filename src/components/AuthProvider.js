import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import AuthService from "../services/auth.service";
import AuthToken from "../utils/auth-token";

const routes = {
  login: ["/", "/login-officer"],
  admin: [
    "/admin",
    "/service-level-agreement",
    "/add-user",
    "/update-user",
    "/branch-office-list",
    "/add-branch",
    "/detail-user",
  ],
  user: ["/customer", "/add-payment-request", "/payment-request-result"],
  generalSupport: ["/general-support", "/generalSupport/payment-detail"],
  accounting: ["/accounting", "/accounting/payment-detail"],
};

const AuthProvider = ({ children }) => {
  const history = useHistory();
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname !== "/backdoor") {
      const token = AuthToken.getToken();
      let role = "";
      if (token) {
        role = AuthService.getUserRole();
      }
      if (!token && !routes.login.includes(location.pathname)) {
        return history.push("/");
      }

      if (token && routes.login.includes(location.pathname)) {
        if (role === "USER") {
          return history.push("/customer");
        } else if (role === "ADMIN") {
          return history.push("/admin");
        } else if (role === "ACCOUNTING") {
          return history.push("/accounting");
        } else if (role === "GENERAL-SUPPORT") {
          return history.push("/general-support");
        }
      }

      if (
        token &&
        !routes.user.includes(location.pathname) &&
        role === "USER"
      ) {
        return history.push("/customer");
      }
      if (
        token &&
        !routes.admin.includes(location.pathname) &&
        role === "ADMIN"
      ) {
        return history.push("/admin");
      }
      if (
        token &&
        !routes.accounting.includes(location.pathname) &&
        role === "ACCOUNTING"
      ) {
        return history.push("/accounting");
      }
      if (
        token &&
        !routes.generalSupport.includes(location.pathname) &&
        role === "GENERAL-SUPPORT"
      ) {
        return history.push("/general-support");
      }
    }
  }, [history, location.pathname]);

  return children;
};

export default AuthProvider;