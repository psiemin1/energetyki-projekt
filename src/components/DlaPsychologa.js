import React, { useState, useEffect } from 'react';
import './DlaPsychologa.css';

const defaultData = [
  {
    id: 'tematy',
    title: 'Tematy do poruszenia',
    items: [
      'Nawyki w rodzinie',
      'Stosunek rodziców do sprawy',
      'Skutek używania',
      'Powód picia',
      'Opinia rówieśników',
      'Koszt oraz rozsądniejsze wydatki',
    ],
  },
  {
    id: 'metody',
    title: 'Metody zapobiegawcze',
    items: [
      'Zaangażowanie samorządu uczniowskiego',
      'Zbudowanie rodzinnych zdrowych nawyków',
      'Dofinansowanie zakupu zdrowszych alternatyw',
      'Wyjaśnienie konsekwencji',
      'Kary dyscyplinarne (uwagi, rozmowy z nauczycielem)',
    ],
  },
  {
    id: 'nauczyciele',
    title: 'Informacje dla nauczycieli',
    items: [
      'Skład oraz zawartość najpopularniejszych napoi',
      'Zrozumienie fenomenu napojów',
      'Taktyki marketingowe używane do promocji napoi',
      'Jak przekazać konsekwencje bez niepokoju',
      'Punkty sprzedaży wokół szkół',
      'Jak rozmawiać bez zażenowania z uczniem',
    ],
  },
  {
    id: 'uczniowie',
    title: 'Informacje dla uczniów',
    items: [
      'Konsekwencje zdrowotne – uszkodzenie organów',
      'Zanieczyszczenie środowiska przez puszki',
      'Rozregulowanie poziomu zmęczenia – zegar biologiczny',
    ],
  },
  {
    id: 'materialy',
    title: 'Materiały do nauki',
    items: [
      'Prezentacje',
      'Slajdy detaliczne',
      'Makiety uszkodzonych organów',
      'Kursy o odżywianiu się',
      'Rozmowy z osobami z uszkodzonym organem',
    ],
  },
];

function DlaPsychologa() {
  const [sections, setSections] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('psychologSekcje');
    if (stored) {
      setSections(JSON.parse(stored));
    } else {
      setSections(defaultData);
    }
  }, []);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('drag-index', index);
  };

  const handleDrop = (e, dropIndex) => {
    const dragIndex = parseInt(e.dataTransfer.getData('drag-index'), 10);
    if (dragIndex === dropIndex) return;

    const updated = [...sections];
    const [moved] = updated.splice(dragIndex, 1);
    updated.splice(dropIndex, 0, moved);
    setSections(updated);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const toggleItem = (sectionId, item) => {
    const key = `${sectionId}-${item}`;
    setSelectedItems((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <div className="psycholog-container">
      <h2>Dla psychologa</h2>
      <div className="tile-grid">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="block"
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            <h3>{section.title}</h3>
            <ul>
              {section.items.map((item, i) => {
                const isSelected = selectedItems.includes(`${section.id}-${item}`);
                return (
                  <li
                    key={i}
                    className={isSelected ? 'highlighted' : ''}
                    onClick={() => toggleItem(section.id, item)}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DlaPsychologa;
