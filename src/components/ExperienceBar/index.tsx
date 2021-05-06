import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { ExperienceBarContainer } from './styles';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <ExperienceBarContainer>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} px
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </ExperienceBarContainer>
  );
}
