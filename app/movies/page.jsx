import axios from "axios";
import CardCarousel from "@/components/CardCarousel";
import NavBar from "@/components/Header/NavBar";
import url from "@/services/api_service.js";
import Footer from "@/components/Footer";

const getMovies = async () => {
  try {
    const res = await axios.get(`${url}/b/6460e49b9d312622a35e0744`, {
      headers: {
        "X-Master-Key": process.env.NEXT_PUBLIC_Master_Key,
        "X-Access-Key": process.env.NEXT_PUBLIC_Access_Key,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

async function Movies() {
  const { record } = await getMovies();
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="mb-5">
        <h1 className="text-light text-center fw-bold mb-4">Movies</h1>
        {record.map((item) => (
          <CardCarousel
            collection_name={item.collection}
            content_type={item.content_type}
            shows={item.data}
          />
        ))}
      </main>
      <footer className="pt-5">
        <Footer />
      </footer>
    </>
  );
}

export default Movies;
