import { AboutMe } from "../AboutMe";
import { Header } from "../components/Header";
import "../styles/global.scss";

function MyApp({ Component }) {
  return (
    <>
      <Header />
      <Component />
      <AboutMe />
    </>
  );
}

export default MyApp;
