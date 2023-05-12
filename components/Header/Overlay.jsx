import styles from "@/styles/Overlay.module.css";
import Image from "next/image";
import Link from "next/link";

function Overlay() {
  return (
    <div
      className={`h-100 w-100 text-white d-flex justify-content-center align-items-center position-absolute top-0 ${styles.overlay}`}
    >
      <div
        className={`w-50 d-flex flex-column justify-content-center align-items-center`}
      >
        <h6 className={`${styles.offer__title1}`}>DISNEY BUNDLE DUO BASIC</h6>
        <Image src="/zulu-logo.webp" alt="Logo" width="200" height="200" />
        <h3 className="mb-5">
          Get Hulu & Disney+, both with ads, for $9.99/month.
        </h3>
        <button type="button" className={`btn btn-lg ${styles.get__started}`}>
          GET THEN BOTH
        </button>
        <Link href="#" className="text-white mt-3">
          Terms apply
        </Link>
        <Link href="#" className="text-white mt-2">
          Sign up for Zulu only
        </Link>
      </div>
    </div>
  );
}

export default Overlay;
