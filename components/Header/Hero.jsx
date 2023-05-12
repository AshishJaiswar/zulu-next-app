import Image from "next/image";
import styles from "@/styles/Header.module.css";

function Hero() {
  return (
    <div className={`container-fluid ${styles.image__container}`}>
      <Image
        src="/hero-movie-gallery.webp"
        className={`img-fluid bg-img ${styles.bg__img}`}
        alt="Movie gallery in background"
        fill={true}
      />
    </div>
  );
}

export default Hero;
