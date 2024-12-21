// import { BasicTypes } from "./typescript/BasicTypes";
// import { ObjectLiterals } from "./typescript/ObjectLiterals";
// import { BasicFunctions } from "./typescript/BasicFunctions";
// import { Counter } from "./typescript/Counter";
// import { LoginPage } from "./components/LoginPage";
// import { UserPage } from "./components/UserPage";

import { Providers } from "./components/Providers";
import { FormPage } from "./components/FormPage";

function App() {
  return (
    <Providers>
      <div className="flex flex-col gap-4 justify-center items-center h-svh">
        <h1 className="text-3xl font-bold">React + TypeScript</h1>
        {/* <BasicTypes /> */}
        {/* <ObjectLiterals /> */}
        {/* <BasicFunctions /> */}
        {/* <Counter /> */}
        {/* <LoginPage /> */}
        {/* <UserPage /> */}
        <FormPage />
      </div>
    </Providers>
  );
}

export default App;
