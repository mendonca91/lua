import Head from "next/head";
import { FaGithub, FaArrowAltCircleDown } from "react-icons/fa";

import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Luana Fraga</title>
      </Head>
      <div className={styles.background}>
        <main className={styles.contentContainer}>
          <section className={styles.hero}>
            <h1>Luana Fraga</h1>
          </section>
          <div className={styles.gitLink}>
            <a href="">
              <FaGithub />
            </a>
          </div>
        </main>

        <div className={styles.contentText}>
          <h3>Bem-vindo à minha página!</h3>
          <h3>Aqui você encontrará meus projetos de Data Science :)</h3>
          <h3>Também terá acesso ao meu gitHub e meu contato.</h3>

          <div>
            <a href="">Github</a>
            <a
              href="https://www.linkedin.com/in/luana-fraga-63a794193/"
              target={"_blank"}
              rel="noreferrer"
            >
              Linkedin
            </a>
          </div>

          <a href="#about-me">
            <FaArrowAltCircleDown />
          </a>
        </div>
      </div>
    </>
  );
}
