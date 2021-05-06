import Head from "next/head";
import Navbar from "../components/ui/NavBar";
import Hero from "../components/ui/Hero";
import Footer from "../components/ui/Footer";
import ProjectGrid from "../components/Projects/ProjectGrid";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Frankie Murillo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <Hero />
        <ProjectGrid />
        <Footer />
      </body>
    </Fragment>
  );
}
