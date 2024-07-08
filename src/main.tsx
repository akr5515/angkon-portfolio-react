import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import ThemeContextProvider from "./contexts/theme-context";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme();

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <ThemeContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ThemeContextProvider>
  );
}
