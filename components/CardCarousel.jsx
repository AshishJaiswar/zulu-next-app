import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Carousel.module.css";

function CardCarousel({ collection_name, content_type, shows }) {
  return (
    <>
      <h4 className="text-light text-uppercase mx-5 mb-0">{collection_name}</h4>
      <div className="container my-4 d-flex flex-wrap justify-content-evenly">
        {shows.map((show, index) => (
          <div key={index} className={`card m-2  ${styles.card__item}`}>
            <Image
              src={show.image}
              className={`card-img-top ${styles.image__hover}`}
              alt={show.name}
              width={300}
              height={175}
            />
            <div className="card-body">
              <h5 className="card-title text-light">
                <Link href="#" className="nav-link p-0">
                  {show.name}
                </Link>
              </h5>
              <p className="card-text text-white">{show.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardCarousel;
