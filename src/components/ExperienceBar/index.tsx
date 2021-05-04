import React from 'react';
import { ExperienceBarContainer } from './styles';

export function ExperienceBar() {
  return (
    <ExperienceBarContainer>
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }} />
        <span style={{ left: '50%' }}>300 px</span>
      </div>
      <span>600 xp</span>
    </ExperienceBarContainer>
  );
}
