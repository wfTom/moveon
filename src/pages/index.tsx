import React from 'react';
import Head from 'next/head';
import { ExperienceBar } from '../components/ExperienceBar/ExperienceBar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <ExperienceBar />
    </div>
  );
}
