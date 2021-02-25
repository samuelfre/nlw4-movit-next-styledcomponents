import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import React from "react";
import MainContainer from "../estructure-components/MainContainer";
import MainSection from "../estructure-components/MainSection";
import { CompletedChallenge } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";

import Head from "next/head";

function Home() {
  return (
    <MainContainer>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar />
      <MainSection>
        <div>
          <Profile />
          <CompletedChallenge />
          <Countdown />
        </div>
      </MainSection>
    </MainContainer>
  )
}

export default Home;
