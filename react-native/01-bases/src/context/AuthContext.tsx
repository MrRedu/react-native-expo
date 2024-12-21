import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

enum AuthStatus {
  CHECKING = "checking",
  AUTHENTICATED = "authenticated",
  NOT_AUTHENTICATED = "not-authenticated",
}

interface AuthState {
  status: AuthStatus;
  token?: string;

  user?: User;
  isChecking: boolean;
  isAuthenticated: boolean;

  loginWithEmailPassword: (email: string, password: string) => void;
  logout: () => void;
}

interface User {
  name: string;
  email: string;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState(AuthStatus.CHECKING);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setTimeout(() => {
      setStatus(AuthStatus.NOT_AUTHENTICATED);
    }, 2000);
  }, []);

  const loginWithEmailPassword = (email: string, password: string) => {
    setUser({ name: "Eduardo", email });
    setTimeout(() => {
      setStatus(AuthStatus.AUTHENTICATED);
    }, 1500);
  };

  const logout = () => {
    setUser(undefined);
    setStatus(AuthStatus.NOT_AUTHENTICATED);
  };

  return (
    <AuthContext.Provider
      value={{
        status,
        user,
        // Getter
        isChecking: status === AuthStatus.CHECKING,
        isAuthenticated: status === AuthStatus.AUTHENTICATED,
        // Method
        loginWithEmailPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
