import './App.css';
import { myArr } from './nodeLabC';

function nodeLabD() {

  const spreadThem = (...nums) => {
    let result = [myArr];
    console.log(result);
  };

  return (
    <div>
      <div>D-result{spreadThem()}</div>
    </div>
  );
}

export default nodeLabD;
