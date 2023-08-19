// import styled from 'styled-components'

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Form from "../../components/home-page/Form";
import Navigation from "../../components/home-page/Navigation";
import Restaurants from "../../components/home-page/Restaurants";
import Slogant from "../../components/home-page/Slogant";


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