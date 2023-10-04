import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { UseCases } from "@/sections/UseCases";
import { Api } from "@/sections/Api";
import { Features } from "@/sections/Features";
import { Community } from "@/sections/Community";
import { Footer } from "@/sections/Footer";
import { QuickStart } from "@/sections/QuickStart";
import { ThemeProvider } from "@/shared/ui";
import styles from "./styles.module.scss";
import { appWithTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps: GetStaticProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'common',
    ])),
  },
})

function Home() {
  return (
    <ThemeProvider>
      <Header />
      <main className={styles.main}>
        <Hero />
        <UseCases />
        <Features />
        <QuickStart/ >
        <Api />
        <Community />
      </main>
      <Footer className={styles.footer} />
    </ThemeProvider>
  );
}

export default appWithTranslation(Home)
