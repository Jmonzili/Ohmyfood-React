import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Form from "../../components/page-home/Form";
import Navigation from "../../components/page-home/Navigation";
import Restaurants from "../../components/page-home/Restaurants";
import Slogant from "../../components/page-home/Slogant";


function Home() {
  return (
    <div>
      <Header />
      <main>
        <Form />
        <Slogant />
        <Navigation />
        <Restaurants />
      </main>
      <Footer />
    </div>
  );
}

export default Home;