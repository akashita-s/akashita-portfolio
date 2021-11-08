import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/extra2.module.css";
import { motion } from "framer-motion";
import { BsColumnsGap } from "react-icons/bs";
import { IconContext } from "react-icons";

const data = [
  {
    key: 0,
    name: "Mutual Funds Listing",
    tech: "Nextjs, Reactjs, CSS, Redux",
    description:
      "An app to display current rates of mutual funds and data based analysis.",
    url: "https://mutual-funds-listing.vercel.app",
    git: "https://github.com/akashita-s/mutual-funds-listing",
  },

  {
    key: 1,
    name: "User Portal",
    tech: "Nextjs, Reactjs, CSS, Redux, Postman",
    description:
      "This uses an API to check whether the user already exists, and if not sign-up page is displayed.",
    url: "https://userportal.vercel.app",
    git: "https://github.com/akashita-s/profile-signup",
  },
  {
    key: 2,
    name: "Financial Inclusion Data",
    tech: "Nextjs, Reactjs, CSS, react-charts, react-calendar",
    description:
      "A basic portal(demo) to check salary of workers relative to their age",
    url: "https://inclusion.vercel.app",
    git: "https://github.com/akashita-s/inclusion",
  },
  {
    key: 3,
    name: "Cake Delivery App",
    tech: "React-native , CSS, Android studio",
    description: "A mobile app to sell bakery items.",
    url: "https://github.com/akashita-s/cake-delivery-app",
    git: "https://github.com/akashita-s/cake-delivery-app",
  },
];

function Projects() {
  const router = useRouter();
  const onclicklink = (link: string) => {
    router.push(link);
  };
  const Card = ({ name, tech, description, url, git }: any) => {
    return (
      <motion.div
        initial={{ y: 600 }}
        animate={{ y: 0 }}
        transition={{
          duration: "1",
        }}
        className={styles.card}
      >
        
          <IconContext.Provider value={{ color: "white", size: "4em" }}>
            <BsColumnsGap />
          </IconContext.Provider>
          <h1>{name}</h1>
        
        <h3>Tech used : {tech} </h3>
        <h3>{description}</h3>
        <h3
          className={styles.link}
          onClick={() => {
            onclicklink(url);
          }}
        >
          Go to URL &#8811;
        </h3>
        <h3
          className={styles.link}
          onClick={() => {
            onclicklink(git);
          }}
        >
          View Git Repo &#8811;
        </h3>
      </motion.div>
    );
  };
  return (
    <div className={styles.grid}>
      {data.map((item) => (
        <Card
          name={item.name}
          tech={item.tech}
          url={item.url}
          git={item.git}
          description={item.description}
          key={item.key}
        />
      ))}
    </div>
  );
}

export default Projects;
