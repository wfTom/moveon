import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountDownContext } from '../../contexts/CountDownContext';

import {
  Active,
  Container,
  FailedButton,
  NotActive,
  SucceededButton
} from './styles';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountDown } = useContext(CountDownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountDown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountDown();
  }

  return (
    <Container>
      {activeChallenge ? (
        <Active>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Exercite-se" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <FailedButton type="button" onClick={handleChallengeFailed}>
              Falhei
            </FailedButton>
            <SucceededButton type="button" onClick={handleChallengeSucceeded}>
              Completei
            </SucceededButton>
          </footer>
        </Active>
      ) : (
        <NotActive>
          <strong>Finalize um cilco para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </NotActive>
      )}
    </Container>
  );
}
