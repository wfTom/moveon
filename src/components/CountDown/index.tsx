import React, { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountDownContext } from '../../contexts/CountDownContext';
import {
  CountDownButton,
  CountDownButtonActive,
  CountDownContainer
} from './style';

export function CountDown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountDown,
    resetCountDown
  } = useContext(CountDownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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
