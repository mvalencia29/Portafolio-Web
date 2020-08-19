import React from "react";
import { HomeContainer } from "./Style";
import Profile from "./components/Profile";

const Home = () => {
  return (
    <main>
      <section>
        <HomeContainer>
          <Profile />
        </HomeContainer>
      </section>
    </main>
  );
};

export default Home;
