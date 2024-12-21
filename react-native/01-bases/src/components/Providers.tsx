import { PropsWithChildren } from "react";
import { AuthProvider } from "../context/AuthContext";

export const Providers = ({ children }: PropsWithChildren) => {
  return <AuthProvider>{children}</AuthProvider>;
};
