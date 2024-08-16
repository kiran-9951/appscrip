import Header from "../Component/Header";
import Header1 from "../Component/Header1";
import Footer from "../Component/Footer";
import ItemsWithFilters from "../Component/ItemsWithFilters";
export default function Home() {
  return (
    <>
    <Header1/>
      <Header />
      <ItemsWithFilters />
      <Footer />
    </>
  );
}
