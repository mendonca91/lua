import styles from "./styles.module.scss";
import { portfolio } from "./portfolio";

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <h2 className={styles.title}>Portfólio</h2>
      <div className={styles.portfolioContent}>
        {portfolio.map((projeto) => (
          <a
            key={projeto.id}
            href={projeto.url}
            target={"_blank"}
            rel="noreferrer"
          >
            <div className={styles.portfolioItem}>
              <img src={projeto.img} alt={projeto.title} />
              <h3>{projeto.title}</h3>
              <div className={styles.portfolioHover}>
                <p>{projeto.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
