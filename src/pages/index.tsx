import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import React from "react";
import MainContainer from "../structure-components/MainContainer";
import MainSection from "../structure-components/MainSection";
import { CompletedChallenge } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";

import Head from "next/head";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";

function Home() {
  return (
    <MainContainer>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar />
      <CountdownProvider>
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
      </CountdownProvider>
    </MainContainer>
  )
}

export default Home;
