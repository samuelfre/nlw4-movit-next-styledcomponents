import { Profile } from "../components/Profile";
import React from "react";
import MainContainer from "../structure-components/MainContainer";
import MainSection from "../structure-components/MainSection";
import { CompletedChallenge } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { connectToDatabase } from '../util/mongodb'
import { useSession, signOut, getSession } from "next-auth/client";
import { ExperienceBar } from "../components/Experience";


interface HomeProps {
  level?: number;
  currentExperience?: number;
  challengesCompleted?: number;
}

function Home(props: HomeProps) {
  const [session, loading] = useSession();
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}>
      <MainContainer>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <MainSection>
            <div>
              <Profile />
              <>
                {
                  session &&
                  <>
                    <br />
                    Signed in as {session.user.email}
                    <br />
                    <button onClick={() => signOut()}>Sign out</button>
                  </>
                }
              </>
              <CompletedChallenge />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </MainSection>
        </CountdownProvider>
      </MainContainer>
    </ChallengesProvider>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      level: Number(level ?? 1),
      currentExperience: Number(currentExperience ?? 0),
      challengesCompleted: Number(challengesCompleted ?? 0),
    },
  }
}
// export const getServerSideProps: GetServerSideProps = async (ctx) => {

//   const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
//   const { client } = await connectToDatabase();
//   const session = await getSession(ctx);

//   const isConnected = await client.isConnected();
//   if (session) {
//     return {
//       props: {
//         isConnected,
//         level: Number(level ?? 1),
//         currentExperience: Number(currentExperience ?? 0),
//         challengesCompleted: Number(challengesCompleted ?? 0),
//       },
//     }
//   } else {
//     return {
//       redirect: {
//         permanent: false,
//         destination: '/'
//       }
//     }
//   }
// }
