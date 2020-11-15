import React from "react";
import "./App.css";
import { EyeCandy } from "@try-lerna/typescript-react-package";
import {
  TypescriptPackage,
  TypescriptPackageThing,
} from "@try-lerna/typescript-package";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello from UI with typescript. {TypescriptPackage.name} /{" "}
          {new TypescriptPackageThing().something()}
        </p>
        <EyeCandy />
      </header>
    </div>
  );
};

export default App;
