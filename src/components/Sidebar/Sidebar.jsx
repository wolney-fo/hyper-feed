import styles from "./Sidebar.module.css";
import { UserPen } from "lucide-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1721332153282-3be1f363074d?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/wolney-fo.png" />

        <strong>Wolney Oliveira</strong>
        <span>Node developer</span>
      </div>

      <footer>
        <a href="#">
          <UserPen size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
