import './App.css';
import Circle from './components/circle';
import Slider from './components/slider';
import { useState } from 'react';
import Bars from './components/bars';

function App() {
  const [range, setRange] = useState(0);

  const onRangeChange = (value) => {
    setRange(value);
  }

  return (
    <div className="App">
      <div class="container text-center p-5">
        <div class="row align-center">
          <div class="col">
            <div class="row justify-content-center">
              <Circle range={range} />
              <Slider onRangeChange={onRangeChange} />
            </div>
          </div>
          <div class="col">
            <div class="row justify-content-center">
              <Bars />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
