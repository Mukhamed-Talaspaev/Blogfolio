import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MyContext, Obj } from "./Сontext/Context.tsx";

createRoot(document.getElementById("root")!).render(
  <MyContext.Provider value="Hello world">
    <Obj.Provider value={{ foo: 11 }}>
      <App />
    </Obj.Provider>
  </MyContext.Provider>
);
