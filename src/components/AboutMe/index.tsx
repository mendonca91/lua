import { FaGithub, FaLinkedin, FaMailBulk, FaWhatsapp } from "react-icons/fa";
import styles from "./styles.module.scss";

export function AboutMe() {
  return (
    <div id="about-me" className={styles.Container}>
      <div className={styles.UserImg}>
        <img src="/images/lua.png" alt="" />
      </div>

      <div className={styles.UserText}>
        <h2>Oi, eu sou Luana Fraga.</h2>

        <p>
          Desde criança apaixonada pelos números, sou uma pessoa apaixonada por
          tecnologia e otimização de processos. Me formei em Engenharia Civil no
          ano de 2013 pela UNIVERSIDADE FEDERAL DE SERGIPE, com experiência de 6
          anos na área de Planejamento e Controle de Custos e na Construção
          Civil.
        </p>
        <p>
          Finalizei um MBA em Planejamento e Controle em 2016. Certificada pela
          ANCORD em 2019, atuando na área do mercado financeiro até os dias
          atuais. Apaixonada pela área de Data Science com certificações em
          cursos de Python, Ciência de Dados e Análise de Dados pela Alura e
          Data Science Academy.b a. Tempore aut rem beatae sed consequuntur
          quasi ut provident magni!
        </p>

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

        <a
          href="https://api.whatsapp.com/send?phone=5579981166882"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}
