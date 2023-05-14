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
        <Image src="/zulu-logo.webp" alt="Logo" width="200" height="200" />
        <h1 className={`text-center`}>Unlimited movies, TV shows and more</h1>
        <h4 className="mb-5 text-center">For $9.99/month</h4>
        <button type="button" className={`btn btn-lg ${styles.get__started}`}>
          Get Started
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
