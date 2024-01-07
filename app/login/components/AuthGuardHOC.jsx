"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import loginUser from "@/services/loginUser";
import { useAuthContext } from "@/context-providers/AuthProvider";
const AuthGuardHOC = (props) => {
  const router = useRouter();
  const [state, setState] = useState({
    isAuthenticated: false,
    hasCheckedLocalStorageToken: false,
  });

  const { login, isAuthenticated } = useAuthContext();

  useEffect(() => {
    const token = localStorage.getItem("token");

    const handleLoginSuccess = (userData) => {
      login(userData);
    };

    const handleLoginFailure = (error) => {
      console.error("Login failed", error);
      router.push("/login");
    };

    if (token) {
      loginUser(token)
        .then(handleLoginSuccess)
        .catch(handleLoginFailure)
        .finally(() => {
          setState((prevState) => ({
            ...prevState,
            hasCheckedLocalStorageToken: true,
          }));
        });
    } else {
      router.push("/login");
    }
  }, []);

  return state.hasCheckedLocalStorageToken && isAuthenticated()
    ? props.children
    : null;
};

export default AuthGuardHOC;
