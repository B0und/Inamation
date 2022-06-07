/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next"
import styles from "../styles/Home.module.css"
import { motion } from "framer-motion"

const Home: NextPage = () => {
  return (
    <>
      <motion.img
        initial={{ scale: 0.65, opacity: 1 }}
        animate={{ scale: 0.65, rotate: -360, opacity: 0.4 }}
        transition={{
          ease: "linear",
          repeat: Infinity,
          duration: 40,
          opacity: { duration: 2, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
        }}
        id="runes"
        className={styles.runes}
        src="./runes.png"
        alt=""
      />
      <motion.div
        className={styles.container}
        animate={{ rotate: 360 }}
        transition={{ ease: "linear", repeat: Infinity, duration: 30 }}>
        <motion.img
          initial={{ scale: 0.7 }}
          id="penta"
          className={styles.penta}
          src="./penta.png"
          alt="pentagram"
        />
        <motion.img
          initial={{ scale: 0.485 }}
          className={styles.eye}
          id="eye"
          src="./eye.png"
          alt="eye"
        />
      </motion.div>

      <motion.img
        id="character"
        className={styles.character}
        src="./ina-character.png"
        alt="character"
      />
      <motion.img
        initial={{ scale: 0.32 }}
        animate={{ scale: 0.38 }}
        transition={{ repeat: Infinity, duration: 3, repeatType: "mirror" }}
        id="crown"
        className={styles.crown}
        src="./ina-crown.png"
        alt=""
      />
    </>
  )
}

export default Home
