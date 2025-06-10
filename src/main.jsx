import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";

const enableMocking = async () => {
  if (!import.meta.env.DEV) {
    return;
  }

  const { worker } = await import("./api/mocks/browser.js");
  return worker.start();
};

enableMocking().then(() => {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <UserProvider>
        <App />
      </UserProvider>
    </StrictMode>
  );
});
