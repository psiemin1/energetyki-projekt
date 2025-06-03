import React, { useState, useCallback } from 'react';
import './Ankieta.css';

function Ankieta() {
  const [activeButton, setActiveButton] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleButtonClick = useCallback((buttonName) => {
    setActiveButton(buttonName);
    setSelectedOptions({}); // Reset selected options when a new button is clicked
  }, []);

  const handleOptionClick = (question, option) => {
    setSelectedOptions(prevOptions => ({
      ...prevOptions,
      [question]: option
    }));
  };

  let content;
  switch (activeButton) {
    case "Energetyki":
      content = (
        <>
          <div className="survey-island">
            <p className="dane-text">1. Jak często spożywasz napoje energetyczne?</p>
            <div className="options-container">
              <button className={`option-button ${selectedOptions["question1"] === "codziennie" ? "selected" : ""}`} onClick={() => handleOptionClick("question1", "codziennie")}>Codziennie</button>
              <button className={`option-button ${selectedOptions["question1"] === "tygodniowo" ? "selected" : ""}`} onClick={() => handleOptionClick("question1", "tygodniowo")}>Tygodniowo</button>
              <button className={`option-button ${selectedOptions["question1"] === "miesiecznie" ? "selected" : ""}`} onClick={() => handleOptionClick("question1", "miesiecznie")}>Miesięcznie</button>
              <button className={`option-button ${selectedOptions["question1"] === "nigdy" ? "selected" : ""}`} onClick={() => handleOptionClick("question1", "nigdy")}>Nigdy</button>
            </div>
          </div>
          <div className="survey-island">
            <p className="dane-text">2. Dlaczego spożywasz napoje energetyczne?</p>
            <div className="options-container">
              <button className={`option-button ${selectedOptions["question2"] === "pobudzenie" ? "selected" : ""}`} onClick={() => handleOptionClick("question2", "pobudzenie")}>Pobudzenie</button>
              <button className={`option-button ${selectedOptions["question2"] === "smak" ? "selected" : ""}`} onClick={() => handleOptionClick("question2", "smak")}>Smak</button>
              <button className={`option-button ${selectedOptions["question2"] === "towarzysko" ? "selected" : ""}`} onClick={() => handleOptionClick("question2", "towarzysko")}>Towarzysko</button>
              <button className={`option-button ${selectedOptions["question2"] === "inne" ? "selected" : ""}`} onClick={() => handleOptionClick("question2", "inne")}>Inne</button>
            </div>
          </div>
        </>
      );
      break;
    case "Placeholder1":
      content = (
        <>
          <div className="survey-island">
            <p className="dane-text">Pytanie placeholderowe 1.</p>
            <div className="options-container">
              <button className={`option-button ${selectedOptions["placeholder1"] === "opcja1" ? "selected" : ""}`} onClick={() => handleOptionClick("placeholder1", "opcja1")}>Opcja 1</button>
              <button className={`option-button ${selectedOptions["placeholder1"] === "opcja2" ? "selected" : ""}`} onClick={() => handleOptionClick("placeholder1", "opcja2")}>Opcja 2</button>
              <button className={`option-button ${selectedOptions["placeholder1"] === "opcja3" ? "selected" : ""}`} onClick={() => handleOptionClick("placeholder1", "opcja3")}>Opcja 3</button>
              <button className={`option-button ${selectedOptions["placeholder1"] === "opcja4" ? "selected" : ""}`} onClick={() => handleOptionClick("placeholder1", "opcja4")}>Opcja 4</button>
            </div>
          </div>
        </>
      );
      break;
    case "Placeholder2":
      content = (
        <>
          <div className="survey-island">
            <p className="dane-text">Pytanie placeholderowe 2.</p>
            <div className="options-container">
              <button className={`option-button ${selectedOptions["placeholder2"] === "opcja1" ? "selected" : ""}`} onClick={() => handleOptionClick("placeholder2", "opcja1")}>Opcja 1</button>
              <button className={`option-button ${selectedOptions["placeholder2"] === "opcja2" ? "selected" : ""}`} onClick={() => handleOptionClick("placeholder2", "opcja2")}>Opcja 2</button>
              <button className={`option-button ${selectedOptions["placeholder2"] === "opcja3" ? "selected" : ""}`} onClick={() => handleOptionClick("placeholder2", "opcja3")}>Opcja 3</button>
              <button className={`option-button ${selectedOptions["placeholder2"] === "opcja4" ? "selected" : ""}`} onClick={() => handleOptionClick("placeholder2", "opcja4")}>Opcja 4</button>
            </div>
          </div>
        </>
      );
      break;
    case "Placeholder3":
      content = (
        <>
          <div className="survey-island">
            <p className="dane-text">Pytanie placeholderowe 3.</p>
            <div className="options-container">
              <button className={`option-button ${selectedOptions["placeholder3"] === "opcja1" ? "selected" : ""}`} onClick={() => handleOptionClick("placeholder3", "opcja1")}>Opcja 1</button>
              <button className={`option-button ${selectedOptions["placeholder3"] === "opcja2" ? "selected" : ""}`} onClick={() => handleOptionClick("placeholder3", "opcja2")}>Opcja 2</button>
              <button className={`option-button ${selectedOptions["placeholder3"] === "opcja3" ? "selected" : ""}`} onClick={() => handleOptionClick("placeholder3", "opcja3")}>Opcja 3</button>
              <button className={`option-button ${selectedOptions["placeholder3"] === "opcja4" ? "selected" : ""}`} onClick={() => handleOptionClick("placeholder3", "opcja4")}>Opcja 4</button>
            </div>
          </div>
        </>
      );
      break;
    case "Placeholder4":
      content = (
        <>
          <div className="survey-island">
            <p className="dane-text">Pytanie placeholderowe 4.</p>
            <div className="options-container">
              <button className={`option-button ${selectedOptions["placeholder4"] === "opcja1" ? "selected" : ""}`} onClick={() => handleOptionClick("placeholder4", "opcja1")}>Opcja 1</button>
              <button className={`option-button ${selectedOptions["placeholder4"] === "opcja2" ? "selected" : ""}`} onClick={() => handleOptionClick("placeholder4", "opcja2")}>Opcja 2</button>
              <button className={`option-button ${selectedOptions["placeholder4"] === "opcja3" ? "selected" : ""}`} onClick={() => handleOptionClick("placeholder4", "opcja3")}>Opcja 3</button>
              <button className={`option-button ${selectedOptions["placeholder4"] === "opcja4" ? "selected" : ""}`} onClick={() => handleOptionClick("placeholder4", "opcja4")}>Opcja 4</button>
            </div>
          </div>
        </>
      );
      break;
    default:
      content = <p className="dane-text">Wybierz ankietę.</p>;
  }

  const ButtonWithText = ({ buttonName }) => {
    return (
      <>
        <button
          className="dane-button"
          onClick={() => handleButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      </>
    );
  };

  const goBack = () => {
    setActiveButton(null);
  };

  return (
    <div>
      <h2>Ankieta</h2>
      {activeButton ? (
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
          <img src="./ankietachłopak.png" alt="Ankieta Chłopak" style={{ marginRight: '50px', width: '512px', height: '768px', objectFit: 'contain', position: 'fixed', top: '50px', left: 0, transform: 'translateX(20%)' }} />
          <div className="survey-content">
            <div>
              <button className="back-button" onClick={goBack}>
                ◀
              </button>
              {content}
            </div>
          </div>
          <img src="./ankietadziewczyna.png" alt="Ankieta Dziewczyna" style={{ marginLeft: '50px', width: '512px', height: '768px', objectFit: 'contain', position: 'fixed', top: '50px', right: 0, transform: 'translateX(-20%)' }} />
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
          <img src="./ankietachłopak.png" alt="Ankieta Chłopak" style={{ marginRight: '50px', width: '512px', height: '768px', objectFit: 'contain', position: 'fixed', top: '50px', left: 0, transform: 'translateX(20%)' }} />
          <div>
            <ButtonWithText
              buttonName="Energetyki"
            />
            <ButtonWithText buttonName="Placeholder1" />
            <ButtonWithText buttonName="Placeholder2" />
            <ButtonWithText buttonName="Placeholder3" />
            <ButtonWithText buttonName="Placeholder4" />
          </div>
          <img src="./ankietadziewczyna.png" alt="Ankieta Dziewczyna" style={{ marginLeft: '50px', width: '512px', height: '768px', objectFit: 'contain', position: 'fixed', top: '50px', right: 0, transform: 'translateX(-20%)' }} />
        </div>
      )}
    </div>
  );
}

export default Ankieta;
