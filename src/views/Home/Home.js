import React from "react";
import { HomeContainer } from "./Style";
import Profile from "./components/Profile";
import Accounts from "../../components/Accounts";

const Home = () => {
  return (
    <main>
      <section>
        <HomeContainer>
          <Profile />
          <Accounts />
        </HomeContainer>
      </section>
    </main>
  );
};

export default Home;
