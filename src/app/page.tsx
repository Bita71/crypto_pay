import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { UseCases } from "@/sections/UseCases";
import { Api } from "@/sections/Api";
import { Features } from "@/sections/Features";
import { Community } from "@/sections/Community";
import { Footer } from "@/sections/Footer";
import { ThemeProvider } from "@/shared/ui";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <ThemeProvider>
      <Header />
      <main className={styles.main}>
        <Hero />
        <UseCases />
        <Features />
        <Api />
        <Community />
      </main>
      <Footer className={styles.footer} />
    </ThemeProvider>
  );
}
