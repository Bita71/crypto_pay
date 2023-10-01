import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { UseCases } from "@/sections/UseCases";
import { Api } from "@/sections/Api";
import styles from "./page.module.scss";
import { Features } from "@/sections/Features";
import { ThemeProvider } from "@/shared/ui";

export default function Home() {
  return (
    <ThemeProvider>
      <Header />
      <main className={styles.main}>
        <Hero />
        <UseCases />
        <Features />
        <Api />
      </main>
    </ThemeProvider>
  );
}
