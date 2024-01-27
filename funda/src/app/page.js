import Image from "next/image";
import styles from "./page.module.css";
import Messageone, { Messagetwo } from "./message";

export default function Home() {
  return (
    <main className={styles.main}>
      <Messageone name="hello" lang="nextjs" />
      <Messagetwo name="tushar" />
    </main>
  );
}
