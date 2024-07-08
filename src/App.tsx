import { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { ThemeContext, ThemeContextProps } from "./contexts/theme-context";
import HomePage from "./pages/home";
import ScrollToTop from "./components/helper/scroll-to-top";
import BackToTop from "./components/helper/back-to-top/back-to-top";
import ChangeTheme from "./components/helper/change-theme/change-theme";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme.secondary }}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <BackToTop />
      <ChangeTheme />
    </div>
  );
}

export default App;
