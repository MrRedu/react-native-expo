import { useAuthContext } from "../context/AuthContext";
import { Button } from "./Button";

export const LoginPage = () => {
  const {
    // status,
    isChecking,
    isAuthenticated,
    loginWithEmailPassword,
    user,
    logout,
  } = useAuthContext();

  if (isChecking) return <h2>Verificando autenticación</h2>;

  return (
    <>
      {isAuthenticated ? (
        <>
          <h2>¡Bienvenido!</h2>
          <pre>
            <code>{JSON.stringify(user, null, 2)}</code>
          </pre>
          <Button onClick={logout}>Cerrar sesión</Button>
        </>
      ) : (
        <>
          <h2>Página de NOT_AUTHENTICATED</h2>
          <Button
            onClick={() => {
              loginWithEmailPassword("eduardo@gmail.com", "123456");
            }}
          >
            Iniciar sesión
          </Button>
        </>
      )}
    </>
  );
};
