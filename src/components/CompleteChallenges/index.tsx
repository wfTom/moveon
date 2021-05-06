import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CompleteChallengesContainer } from './styles';

export function CompleteChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <CompleteChallengesContainer>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </CompleteChallengesContainer>
  );
}
