import React from 'react';
import Head from 'next/head';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { HomePage } from '../styles';
import { CompleteChallenges } from '../components/CompleteChallenges';
import { CountDown } from '../components/CountDown';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountDownProvider } from '../contexts/CountDownContext';
import { GetServerSideProps } from 'next';
import { ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengeCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengeCompleted={props.challengeCompleted}
    >
      <HomePage>
        <Head>
          <title>Inicio | MoveOn</title>
        </Head>

        <ExperienceBar />

        <CountDownProvider>
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
        </CountDownProvider>

        <div style={{ marginTop: '250px' }}>
          <p>
            O MoveOn é uma ferramenta que mescla gerenciamento de tempo através
            da técnica de pomodoro com a prática de exercícios.
          </p>
          <p>
            A técnica de pomodoro consiste em divertir o tempo em períodos de 25
            minutes de esforço e intervalos o que auxilia em um melhor foco.
          </p>
          <p>
            E nesses intervalos sugerimos colocar a prática de leves atividades
            físicas como alongamentos e exercícios para os olhos, o que auxilia
            muito aquelas pessoas que passam vários períodos no computador e não
            praticam atividade física.
          </p>
        </div>
      </HomePage>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  };
};
