import { FaGithub, FaLinkedin, FaMailBulk, FaWhatsapp } from "react-icons/fa";
import styles from "./styles.module.scss";

export function AboutMe() {
  return (
    <div id="about-me" className={styles.Container}>
      <div className={styles.UserImg}>
        <img src="/images/lua.png" alt="" />
      </div>

      <div className={styles.UserText}>
        <h1>Oi, eu sou Luana Fraga.</h1>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
          maiores nemo similique eum placeat quisquam unde debitis molestiae, ab
          a. Tempore aut rem beatae sed consequuntur quasi ut provident magni!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
          maiores nemo similique eum placeat quisquam unde debitis molestiae, ab
          a. Tempore aut rem beatae sed consequuntur quasi ut provident magni!
        </p>

        <a href="">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/luana-fraga-63a794193/"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="">
          <FaMailBulk />
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
