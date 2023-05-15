import { Route, Routes } from "react-router-dom";
import { themeContext } from "./Context";
import { useContext } from "react";
import Footer from "./components/Footer/Footer";
import FullProjectPage from "./Pages/FullProjectPage/FullProjectPage";
import HomePage from "./Pages/HomePage.jsx";
import "./App.css";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? "var(--secondary-dark)" : "",
        color: darkMode ? "var(--tertiary-light)" : "",
      }}
    >
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/projects" Component={FullProjectPage} />
      </Routes>
      <Footer />
      <a href="/#" className="moveToTop">
        &uarr;
      </a>
    </div>
  );
}

export default App;
