import React from 'react';
import Head from 'next/head';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { HomePage } from '../styles';
import { CompleteChallenges } from '../components/CompleteChallenges';
import { CountDown } from '../components/CountDown';
import { ChallengeBox } from '../components/ChallengeBox';

export default function Home() {
  return (
    <HomePage>
      <Head>
        <title>Inicio | MoveOn</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompleteChallenges />
          <CountDown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </HomePage>
  );
}
