import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "../components/hero";
import Contact from "../components/contact";
import Container from "../components/container";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        />
      </Head>
      <Container>
        <Hero title="OTA KAWAI" subtitle="My Portfolio" imageOn />
        <Contact styles={{ marginBottom: "30px" }} />
      </Container>
    </>
  );
}
