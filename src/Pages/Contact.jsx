import React, { useContext, useEffect } from "react";
import { AuthContext } from "../store/contexHook";
import { Navigate } from "react-router-dom";

export default function Contact() {
  const { logout } = useContext(AuthContext);
  useEffect(() => {
    logout();
  }, [logout]);
  return (
    <>
      <Navigate to="/" />
    </>
  );
}
