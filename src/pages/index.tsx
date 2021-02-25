import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import React from "react";
import MainContainer from "../structure-components/MainContainer";
import MainSection from "../structure-components/MainSection";
import { CompletedChallenge } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";

import Head from "next/head";
import { ChallengeBox } from "../components/ChallengeBox";

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
        <div>
          <ChallengeBox />
        </div>
      </MainSection>
    </MainContainer>
  )
}

export default Home;
