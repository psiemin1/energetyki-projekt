import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

function Dane() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = useCallback((buttonName) => {
    setActiveButton(prevActiveButton => (prevActiveButton === buttonName ? null : buttonName));
  }, []);

  const ButtonWithText = ({ buttonName }) => {
    const text = "Miejsce na dane po klinieciu przycisku energertyki";
    return (
      <>
        <button
          className="dane-button"
          onClick={() => handleButtonClick(buttonName)}
        >
          {buttonName}
        </button>
        {activeButton === buttonName && <p className="dane-text">{text}</p>}
      </>
    );
  };

  const goBack = () => {
    setActiveButton(null);
  };

  return (
    <div>
      <h2>Zebrane dane</h2>
      {activeButton ? (
        <>
          <button className="back-button" onClick={goBack}>
            ◀
          </button>
          <p className="dane-text">Miejsce na dane po klinieciu przycisku energertyki</p>
        </>
      ) : (
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
          <img src="./zebranedanedziewczyna.png" alt="Dziewczyna" style={{ marginRight: '50px', width: '512px', height: '768px', objectFit: 'contain', position: 'fixed', top: '50px', left: 0, transform: 'translateX(20%)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ButtonWithText
              buttonName="Energetyki"
            />
            <ButtonWithText buttonName="Placeholder1" />
            <ButtonWithText buttonName="Placeholder2" />
            <ButtonWithText buttonName="Placeholder3" />
            <ButtonWithText buttonName="Placeholder4" />
          </div>
          <img src="./zebranedanechlopak.png" alt="Chłopak" style={{ marginLeft: '50px', width: '512px', height: '768px', objectFit: 'contain', position: 'fixed', top: '50px', right: 0, transform: 'translateX(-20%)' }} />
        </div>
      )}
    </div>
  );
}

export default Dane;
