import './App.css';
import { mySum } from './nodeLabB1';

function nodeLabB2() {

  let test = () => {
    console.log(mySum(1,2,3));
  }
  
  return (
    <div>
      <div>{test()}</div>

    </div>
  );
}

export default nodeLabB2;
