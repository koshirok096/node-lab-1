import './App.css';
import { myArr } from './nodeLabC';

export const mySecondArr = myArr().map(function (val) {
  return val * 2;
});

