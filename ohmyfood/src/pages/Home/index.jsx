// import styled from 'styled-components'

import Form from "../../components/home-page/Form";
import Navigation from "../../components/home-page/Navigation";
import Restaurants from "../../components/home-page/Restaurants";
import Slogant from "../../components/home-page/Slogant";


function Home() {
  return (
    <main>
      <Form />
      <Slogant />
      <Navigation />
      <Restaurants />
    </main>
  );
}

export default Home;