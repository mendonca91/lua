import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useWindowSize } from "../../hooks/useWindowSize";
import styles from "./styles.module.scss";

export function Header() {
  const window = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <span>Luana Fraga</span>
          {window.width && window.width > 1250 ? (
            <nav className={styles.navHeader}>
              <ul className={styles.navItens}>
                <li className={styles.navItem}>
                  <a className={styles.active} href="">
                    Home
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a href="#portfolio">Portfólio</a>
                </li>
                <li className={styles.navItem}>
                  <a href="#about-me">Sobre mim</a>
                </li>
                <li className={styles.navItem}>
                  <a href="#contact">Contato</a>
                </li>
              </ul>
            </nav>
          ) : (
            <div className={styles.navMobile}>
              <button type="button" onClick={() => setIsOpen(true)}>
                <FaBars />
              </button>
              {isOpen && (
                <nav className={styles.navHeader}>
                  <ul className={styles.navItens}>
                    <li className={styles.navItem}>
                      <a className={styles.active} href="">
                        Home
                      </a>
                    </li>
                    <li className={styles.navItem}>
                      <a href="#portfolio">Portfólio</a>
                    </li>
                    <li className={styles.navItem}>
                      <a href="#about-me">Sobre mim</a>
                    </li>
                    <li className={styles.navItem}>
                      <a href="#contact">Contato</a>
                    </li>
                  </ul>
                  <button type="button" onClick={() => setIsOpen(false)}>
                    <span>X</span>
                  </button>
                </nav>
              )}
            </div>
          )}
        </div>
      </header>
    </>
  );
}
