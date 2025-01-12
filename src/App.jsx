import { Header } from "./components/Header/Header";
import "./global.css";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author={{
              name: "Wolney",
              avatar: "https://github.com/diego3g.png",
              role: "Back-end developer",
            }}
            content="This is a post =D"
          />
        </main>
      </div>
    </>
  );
}

export default App;
