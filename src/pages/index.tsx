import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import React from "react";
import MainContainer from "../estructure-components/MainContainer";
import MainSection from "../estructure-components/MainSection";



function Home() {
  return (
    <MainContainer>
      <ExperienceBar />
        <MainSection>
          <Profile />
        </MainSection>
    </MainContainer>
  )
}

export default Home;
