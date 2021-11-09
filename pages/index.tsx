import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../src/components/Navigation";
import styles from "../styles/Home.module.css";
import Particles from "react-tsparticles";
import Step from "../src/components/Step";

const Home: NextPage = () => {
  const particlesInit = (main: any) => {
    console.log(main);
  };
  const particlesLoaded = (container: any) => {
    console.log(container);
  };
  return (
    <div>
      <Head>
        <title>Akashita Sahu</title>
      </Head>

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className={styles.particles}
        options={{
          background: {
            color: {
              value: "rgb(29, 28, 28)",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 1,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            zIndex: {
              value: 10,
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 0.1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: false,
              value: 2,
            },
          },
          detectRetina: true,
        }}
      />

      <Navigation />

      <main className={styles.main}>
        <Step />
      </main>

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
