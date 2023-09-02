import "./App.scss";
import { AboutMe } from "./Components/AboutMe/AboutMe";
import { Contact } from "./Components/Contact/Contact";
import { Experience } from "./Components/Experience/Experience";
import { Header } from "./Components/Header/Header";
import { NavBar } from "./Components/NavBar/NavBar";
import { Portfolio } from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <div className="my-15px mx-30px mobile">
        <NavBar />
        <Header />
        <AboutMe />
      </div>
      <Portfolio />
      <Experience />
      <Contact/>
    </>
  );
}

export default App;
