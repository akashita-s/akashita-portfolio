import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";

function Basic() {
  const router = useRouter();
  const onclicklink = (link: string) => {
    router.push(link);
  };

  const data = [
    { key: 0, name: "GitHub |", link: 'https://github.com/akashita-s' },
    { key: 1, name: "LinkedIn |", link : 'https://www.linkedin.com/in/akashitasahu/' },
    { key: 2, name: "Blog", link: 'https://aksparksin.blogspot.com/2020/11/views-on-personal-journal.html' },
  ];

  return (
    <div className={styles.container}>
      <motion.div
        initial={{ x: -600 }}
        animate={{ x: 0 }}
        transition={{
          duration: "1",
        }}
      >
        <h1>Akashita Sahu</h1>
        <h3>
          Frontend Developer working in Banglore based company. <br />I am
          dedicated towards building unique projects and cool user experiences.
        </h3>
        <div className={styles.links}>
          {data.map((item) => (
            <h3 onClick={() => {onclicklink(item.link)}} key={item.key}>{item.name}</h3>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{
          duration: "1",
        }}
        className={styles.image}
      >
        <Image alt="img" src={"/coder.jpeg"} width={300} height={300} />
      </motion.div>
    </div>
  );
}

export default Basic;
