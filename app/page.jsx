import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/Header/NavBar";
import Hero from "@/components/Header/Hero";
import Overlay from "@/components/Header/Overlay";
export default async function Home() {
  return (
    <>
      <header className={`position-relative`}>
        <NavBar />
        <Hero />
        <Overlay />
      </header>
    </>
  );
}
