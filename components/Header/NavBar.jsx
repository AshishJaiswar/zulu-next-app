import Image from "next/image";
import styles from "@/styles/Header.module.css";

function NavBar() {
  return (
    <nav
      className={`navbar bg-body-tertiary pt-0 position-relative ${styles.nav}`}
    >
      <div className="container-fluid  d-flex px-4">
        <a className="navbar-brand pt-0" href="#">
          <Image src="/zulu-logo.webp" alt="Logo" width="70" height="70" />
        </a>
        <button type="button" className="btn btn-secondary text-body-tertiary">
          LOG IN
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
