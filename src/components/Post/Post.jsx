import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={props.author.avatar} />

          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>

        <time title="12 de Janeiro às 08:12" dateTime="2025-01-12 08:12:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>{props.content}</p>
      </div>
    </article>
  );
}
