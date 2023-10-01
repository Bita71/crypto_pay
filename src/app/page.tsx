import { Fragment } from "react";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { UseCases } from "@/sections/UseCases";
import { Api } from "@/sections/Api";
import styles from './page.module.scss';

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <Hero />
        <UseCases />
        <Api />
      </main>
    </Fragment>
  );
}
