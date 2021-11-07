import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Basic from "../src/components/Basic";
import Github from "../src/components/Github";
import Navigation from "../src/components/Navigation";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Akashita Sahu</title>
      </Head>

      <Navigation />

      <main className={styles.main}>
        <Basic />
      </main>

      <Github />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Vercel.
        </a>
      </footer>
    </div>
  );
};

export default Home;
