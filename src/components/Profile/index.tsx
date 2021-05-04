import React from 'react';
import { ProfileContainer } from './styles';

export function Profile() {
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
          Level 1
        </p>
      </div>
    </ProfileContainer>
  );
}
