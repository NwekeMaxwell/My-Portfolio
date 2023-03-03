import "./App.css";
import Intro from "./components//Intro/Intro";
import Contacts from "./components/Contacts/Contacts";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Testimonials from "./components/Testimonials/Testimonials";
import Works from "./components/Works/Works";
import { themeContext } from "./Context";
import { useContext } from "react";

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
      <Navbar />
      <Intro />
      <Skills />
      <Experience />
      <Works />
      <Projects />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
