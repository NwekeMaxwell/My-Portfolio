import { Route, Routes, useLocation } from "react-router-dom";
import { themeContext } from "./Context";
import { useContext, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import FullProjectPage from "./Pages/FullProjectPage/FullProjectPage";
import HomePage from "./Pages/HomePage.jsx";
import "./App.css";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  //scroll to top config
  const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    return <>{props.children}</>;
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? "var(--secondary-dark)" : "",
        color: darkMode ? "var(--tertiary-light)" : "",
      }}
    >
      <ScrollToTop>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/projects" Component={FullProjectPage} />
        </Routes>
      </ScrollToTop>
      <Footer />
      <a href="#top" className="moveToTop">
        &uarr;
      </a>
    </div>
  );
}

export default App;
