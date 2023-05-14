import axios from "axios";
import CardCarousel from "@/components/CardCarousel";
import NavBar from "@/components/Header/NavBar";
import url from "@/services/api_service.js";
import Footer from "@/components/Footer";

const getTVShows = async () => {
  try {
    const res = await axios.get(`${url}/b/64609d2f8e4aa6225e9ca563`, {
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

async function TVShows() {
  const { record } = await getTVShows();
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="mb-5">
        <h1 className="text-light text-center fw-bold mb-4">TV SHOWS</h1>
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

export default TVShows;
