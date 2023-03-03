import { useState } from 'react';
import { Button } from 'components/Button/Button';
import {
  BtnContainer,
  BtnIten,
  ByMe,
  CalculateContainer,
  CalculateWindow,
} from './Calculate.styled';
import { Calc } from 'calc-js';
import { useContext } from 'react';
import { historyContext } from 'context/HistoryContext';
import { themeContext } from 'context/ThemeContext';

export const Calculate = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [znak, setZnak] = useState('');
  const [sum, setSum] = useState(false);
  const { setArr } = useContext(historyContext);
  const { value } = useContext(themeContext);

  const handleCounter = () => {
    const historyString = `${number1}${znak}${number2}`;

    switch (znak) {
      case '+':
        const resultP = new Calc(Number(number1)).sum(Number(number2)).finish();
        setNumber1(resultP);
        setSum(true);
        setArr(prev => [...prev, historyString + ' = ' + resultP]);
        break;

      case '-':
        const resultM = new Calc(Number(number1))
          .minus(Number(number2))
          .finish();
        setNumber1(resultM);
        setSum(true);
        setArr(prev => [...prev, historyString + ' = ' + resultM]);
        break;

      case '*':
        const resultMy = new Calc(Number(number1))
          .multiply(Number(number2))
          .finish();
        setNumber1(resultMy);
        setSum(true);
        setArr(prev => [...prev, historyString + ' = ' + resultMy]);
        break;

      case '/':
        const resultD = new Calc(Number(number1))
          .divide(Number(number2))
          .finish();
        if (
          (Number(number1) === 0 && Number(number2) === 0) ||
          Number(number2) === 0
        ) {
          setNumber2('');
          setZnak('');
          setNumber1('ошибка');
          return;
        }
        setNumber1(resultD);
        setSum(true);
        setArr(prev => [...prev, historyString + ' = ' + resultD]);
        break;

      default:
        break;
    }
  };

  const handleSum = () => {
    if (znak.length === 0) {
      return setZnak('+');
    }
    if (sum === true) {
      setNumber2('');
      setZnak('+');
      setSum(false);
      return;
    }
    handleCounter();
    setSum(false);
    setNumber2('');
    setZnak('+');
  };

  const handleMinus = () => {
    if (znak.length === 0) {
      setZnak('-');
    }
    if (sum === true) {
      setNumber2('');
      setZnak('-');
      setSum(false);
      return;
    }
    handleCounter();
    setSum(false);
    setNumber2('');
    setZnak('-');
  };

  const handleMultiply = () => {
    if (znak.length === 0) {
      setZnak('*');
    }
    if (sum === true) {
      setNumber2('');
      setZnak('*');
      setSum(false);
      return;
    }
    handleCounter();
    setSum(false);
    setNumber2('');
    setZnak('*');
  };

  const handleDivide = () => {
    if (znak.length === 0) {
      setZnak('/');
    }
    if (sum === true) {
      setNumber2('');
      setZnak('/');
      setSum(false);
      return;
    }
    handleCounter();
    setSum(false);
    setNumber2('');
    setZnak('/');
  };

  const handleСE = () => {
    if (number1.length !== 0 && number2.length !== 0 && znak.length !== 0) {
      setNumber2('');
    } else if (number1.length !== 0 && znak.length !== 0) {
      setZnak('');
    } else {
      setNumber1('');
    }
  };

  const hadleReset = () => {
    setNumber1('');
    setNumber2('');
    setZnak('');
    setSum(false);
  };

  const handlePars = () => {
    const historyString = `${number1}${znak}${number2}`;
    switch (znak) {
      case '+':
        const parsP =
          Number(number1) + (Number(number2) * Number(number1)) / 100;
        setSum(true);
        setNumber1(parsP);
        setArr(prev => [...prev, `${historyString} + '%' + ' = ' + ${parsP}`]);
        break;

      case '-':
        const parsM =
          Number(number1) - (Number(number2) * Number(number1)) / 100;
        setSum(true);
        setNumber1(parsM);
        setArr(prev => [...prev, `${historyString} + '%' + ' = ' + ${parsM}`]);
        break;

      case '*':
        const parsMu = Number(number1) * (Number(number2) / 100);
        setSum(true);
        setNumber1(parsMu);
        setArr(prev => [...prev, `${historyString} + '%' + ' = ' + ${parsMu}`]);
        break;
      
      case '/':
        const parsD = Number(number1) / (Number(number2) / 100);
        setSum(true);
        setNumber1(parsD);
        setArr(prev => [...prev, `${historyString} + '%' + ' = ' + ${parsD}`]);
        break;

      default:
        break;
    }
  };

  const handleSqrt = () => {
    const historyString = `${number1}${znak}${number2}`;
    setNumber1(Math.sqrt(Number(number1)));
    setArr(prev => [
      ...prev,
      '√' + historyString + ' = ' + Math.sqrt(Number(number1)),
    ]);
  };

  const handleClick = num => {
    return znak.length === 0
      ? setNumber1(prev => prev + `${num}`)
      : setNumber2(prev => prev + `${num}`);
  };

  const handlePoint = num => {
    if (number2.includes('.')) {
      return;
    }
    if (znak.length !== 0) {
      return setNumber2(prev => prev + `${num}`);
    }
    if (number1.includes('.')) {
      return;
    }
    if (znak.length === 0) {
      return setNumber1(prev => prev + `${num}`);
    }
  };

  const arrBtn = [
    'C',
    7,
    8,
    9,
    '*',
    '-',
    4,
    5,
    6,
    '/',
    '+',
    1,
    2,
    3,
    '=',
    '.',
    '%',
    0,
    '√',
    'CE',
  ];

  return (
    <CalculateContainer>
      <div>
        {' '}
        <CalculateWindow value={value}>
          {number1.length === 0 ? (
            <p>0</p>
          ) : (
            <p>{sum ? number1 : `${number1}${znak}${number2}`}</p>
          )}
        </CalculateWindow>
        <BtnContainer>
          {arrBtn.map((it, index) => {
            let func = null;
            if (typeof it === 'number') func = () => handleClick(it);
            if (it === '.') func = () => handlePoint(it);
            if (it === '=') func = handleCounter;
            if (it === '+') func = handleSum;
            if (it === '-') func = handleMinus;
            if (it === '*') func = handleMultiply;
            if (it === '/') func = handleDivide;
            if (it === 'CE') func = handleСE;
            if (it === 'C') func = hadleReset;
            if (it === '%') func = handlePars;
            if (it === '√') func = handleSqrt;
            return (
              <BtnIten key={index}>
                <Button onClick={func}>{it}</Button>
              </BtnIten>
            );
          })}
        </BtnContainer>
      </div>
      <ByMe> &copy; Product by Alena Ushakova</ByMe>
    </CalculateContainer>
  );
};
