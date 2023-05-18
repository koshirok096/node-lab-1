import './App.css';
import { mySecondArr } from './nodeLabE1';

const averageValue = mySecondArr.reduce((sum, val) => sum + val, 0) / mySecondArr.length;
const result = mySecondArr.filter(function (val) {
  if (val > averageValue) {
    console.log(val);
    return true;
  }
  return false;
});


function nodeLabF() {

  return (
    <div>
      <div>F-result {result.join(", ")}</div>
    </div>
  );
}

export default nodeLabF;


