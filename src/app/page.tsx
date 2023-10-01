import { Fragment } from "react";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import styles from './page.module.scss';

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <Hero />
      </main>
    </Fragment>
  );
}
