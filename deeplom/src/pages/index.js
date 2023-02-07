import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Container, Navbar } from "react-bootstrap";
import TopComponent from "components/TopComponent";
import Navigation from "components/Navigation";
import Footer from "components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Main Page Service</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossorigin="anonymous"
        />
        <title>Footer</title>
      </Head>
      <Navigation />
      <main className={styles.main}>
        <Container>
          <TopComponent />
        </Container>
      </main>
      <Footer />
    </>
  );
}
