import React, { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import {
  CountDownButton,
  CountDownButtonActive,
  CountDownContainer
} from './style';

let countDownTimeout: NodeJS.Timeout;

export function CountDown() {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  function startCountDown() {
    setIsActive(true);
  }

  function resetCountDown() {
    clearTimeout(countDownTimeout);
    setIsActive(false);
    setTime(25 * 60);
  }

  return (
    <div>
      <CountDownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountDownContainer>

      {hasFinished ? (
        <CountDownButton disabled>Ciclo encerrado</CountDownButton>
      ) : (
        <>
          {isActive ? (
            <CountDownButtonActive type="button" onClick={resetCountDown}>
              Abandonar ciclo
            </CountDownButtonActive>
          ) : (
            <CountDownButton type="button" onClick={startCountDown}>
              Iniciar um ciclo
            </CountDownButton>
          )}
        </>
      )}
    </div>
  );
}
