import { FaGithub, FaLinkedin, FaMailBulk, FaMailchimp } from "react-icons/fa";
import styles from "./styles.module.scss";

export default function Contact() {
  return (
    <section id="contact" className={styles.sectionContact}>
      <div className={styles.contactContainer}>
        <h2>Contate-me</h2>
        <p>Sinta-se a vontade para me mandar uma mensagem.</p>
        <p>
          Para ver meus projetos, acesse meu{" "}
          <a
            href="https://github.com/luanafraga"
            target={"_blank"}
            rel="noreferrer"
          >
            Github
          </a>
        </p>
        <p>
          Para saber mais sobre minha carreira e cursos já feitos, acesse meu{" "}
          <a
            href="https://www.linkedin.com/in/luana-fraga-63a794193/"
            target={"_blank"}
            rel="noreferrer"
          >
            Linkedin
          </a>
        </p>
        <p>
          Ou mande-me um <strong>luafraga1@hotmail.com</strong> caso tenha
          interesse no meu trabalho.
        </p>

        <div className={styles.contactActions}>
          <a
            href="https://github.com/luanafraga"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/luana-fraga-63a794193/"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
