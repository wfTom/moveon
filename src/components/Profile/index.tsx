import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { ProfileContainer } from './styles';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <ProfileContainer>
      <img
        src="https://avatars.githubusercontent.com/u/40028674?v=4"
        alt="Tom"
      />
      <div>
        <strong>Tom</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </ProfileContainer>
  );
}
