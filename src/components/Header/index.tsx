import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <span>Luana Fraga</span>

        <nav>
          <a className={styles.active} href="">
            Home
          </a>
          <a href="/posts">Portfólio</a>
          <a href="/posts">Sobre mim</a>
          <a href="/posts">Contato</a>
        </nav>
      </div>
    </header>
  );
}
