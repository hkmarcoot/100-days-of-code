import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Random Zoo Animal Site!</h1>

        <button className={styles.randomZooBtn}>
          <a href="http://localhost:3000/randomZoo">[Random Zoo animal Here]</a>
        </button>

        <button className={styles.animeFactBtn}>
          <a href="http://localhost:3000/randomZooState">
            [Random stateful Zoo animal Here]
          </a>
        </button>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
