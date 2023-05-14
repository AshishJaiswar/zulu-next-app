import Image from "next/image";
import styles from "@/styles/Header.module.css";
import Link from "next/link";

function NavBar() {
  return (
    <nav
      className={`navbar bg-body-tertiary pt-0 position-relative ${styles.nav}`}
    >
      <div className="container-fluid  d-flex px-4">
        <div className="d-flex align-items-center">
          <Link className="navbar-brand pt-0" href="/">
            <Image src="/zulu-logo.webp" alt="Logo" width="70" height="70" />
          </Link>
          <Link
            className={`navbar-brand  text-light fs-5 ${styles.nav__link}`}
            href="/tv-shows"
          >
            TV Shows
          </Link>
          <Link
            className={`navbar-brand  text-light fs-5 ${styles.nav__link}`}
            href="/movies"
          >
            Movies
          </Link>
        </div>
        <button type="button" className="btn btn-secondary text-body-tertiary">
          LOG IN
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
