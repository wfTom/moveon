import React, { useEffect, useState } from 'react';
import { CountDownButton, CountDownContainer } from './style';

export function CountDown() {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountDown() {
    setActive(true);
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

      <CountDownButton type="button" onClick={startCountDown}>
        Iniciar um ciclo
      </CountDownButton>
    </div>
  );
}
