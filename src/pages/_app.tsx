import { AboutMe } from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import Portfolio from "../components/Portfolio";
import "../styles/global.scss";

function MyApp({ Component }) {
  return (
    <>
      <Header />
      <Component />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default MyApp;
