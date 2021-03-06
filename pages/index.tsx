import Head from "next/head";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Studio from "../components/Studio";
import LearnToPlay from "../components/LearnToPlay";
import Footer from "../components/Footer";
import SupportedBySection from "../components/SupportedBySection";
import axios from "axios";
import { NextPage } from "next";

const Index: NextPage<{ allImages: string[] }> = ({ allImages }) => {
  return (
    <div>
      <Head>
        <title>Rock School</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Home />
      <About />
      <Studio images={allImages} />
      <LearnToPlay />
      <SupportedBySection />
      <Footer />
    </div>
  );
};

export default Index;

export async function getServerSideProps(ctx) {
  const { data } = await axios.get(process.env.GALLERY_IMAGES_ENDPOINT);

  return {
    props: {
      allImages: data.images,
    },
  };
}
