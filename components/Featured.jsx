import axios from "axios";
import Image from "next/image";
import styles from "@/styles/Featured.module.css";
import url from "@/services/api_service.js";

const getFeaturedData = async () => {
  try {
    const res = await axios.get(`${url}/b/645fba4bb89b1e22999cfad6`, {
      headers: {
        "X-Master-Key": process.env.NEXT_PUBLIC_Master_Key,
        "X-Access-Key": process.env.NEXT_PUBLIC_Access_Key,
      },
    });
    return res.data.record;
  } catch (error) {
    console.log(error);
  }
};

async function Featured() {
  const featured = await getFeaturedData();
  return (
    <div className="container-fluid text-white pt-5 pb-5">
      <p className={`${styles.offer__title} pb-2 text-center`}>
        INCLUDED IN ALL PLANS
      </p>
      <h1 className="text-center fw-bold">All The TV You Love</h1>
      <p className="text-center pb-3">
        Watch full seasons of exclusively streaming series, current-season
        episodes, hit movies, Hulu Originals, kids shows, and more.
      </p>
      <div className="container d-flex justify-content-center">
        <div className={styles.card__box}>
          {featured.map((item) => (
            <div
              className={`card m-2 align-items-center position-relative ${styles.card__item}`}
            >
              <Image
                src={item.image}
                className={`card-Image-top ${styles.card__image}`}
                alt={item.name}
                width={350}
                height={500}
              />
              <div
                className={`position-absolute text-center pt-3 w-100 h-100 ${styles.overlay}`}
              >
                <p>{item.genre}</p>
                <h4>{item.content_type}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;
