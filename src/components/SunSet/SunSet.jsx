
import { useState } from 'react';
import './sunSet.scss';

export const SunSet = ({ sun, set,children}) => {
  const [sunriseChecked, setSunriseChecked] = useState(true);
  const [sunsetChecked, setSunsetChecked] = useState(false);

  const handleSunriseChange = () => {
    setSunriseChecked(true);
    setSunsetChecked(false);
  };

  const handleSunsetChange = () => {
    setSunriseChecked(false);
    setSunsetChecked(true);
  };

  return (
    <div
      style={{
        overflow: 'hidden',
        borderRadius: '20px',
        border: '1px solid  #2ca4f4',
      }}
    >
      <input
        type="radio"
        name="time"
        id="sunrise"
        className="input-ani"
        // checked
        checked={sunriseChecked}
        onChange={handleSunriseChange}
      />
      <input
        type="radio"
        name="time"
        id="sunset"
        className="input-ani"
        checked={sunsetChecked}
        onChange={handleSunsetChange}
      />
      <div id="app">
        <div className="glow"></div>
        <div className="sky"></div>
        <div className="stars"></div>
        <div className="city">
          <div className="building">
            <div className="tower">
              <div className="windows"></div>
            </div>
            <div className="tower">
              <div className="windows"></div>
              <div className="ledge"></div>
            </div>
            <div className="tower">
              <div className="windows"></div>
            </div>
          </div>
          <div className="building">
            <div className="tower">
              <div className="windows"></div>
            </div>
            <div className="tower">
              <div className="windows"></div>
              <div className="ledge"></div>
            </div>
            <div className="tower">
              <div className="windows"></div>
              <div className="ledge"></div>
            </div>
          </div>
          <div className="building">
            <div className="tower">
              <div className="windows"></div>
            </div>
            <div className="tower">
              <div className="windows"></div>
              <div className="ledge"></div>
            </div>
            <div className="tower">
              <div className="windows"></div>
            </div>
          </div>
        </div>
        <div className="times">
          <div className="time" data-sunrise={sun} data-sunset={set}></div>
        </div>
        {children}
        <div className="heavens">
          <label
            htmlFor="sunrise"
            className="sunrise"
            data-title="Схід сонця"
          ></label>
          <label
            htmlFor="sunset"
            className="sunset"
            data-title="Захід сонця"
          ></label>
        </div>
        <div className="clouds"></div>
      </div>
    </div>
  );
};
