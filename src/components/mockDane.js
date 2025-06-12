// mockDane.js

export const mockDane = {
  czestosc: [
    { kategoria: "Codziennie", liczba: Math.round(78 * (12 / 90)) },
    { kategoria: "Kilka razy w tygodniu", liczba: Math.round(78 * (28 / 90)) },
    { kategoria: "Raz w tygodniu", liczba: Math.round(78 * (18 / 90)) },
    { kategoria: "Raz w miesiącu", liczba: Math.round(78 * (10 / 90)) },
    { kategoria: "Nigdy", liczba: Math.round(78 * (22 / 90)) }
  ],
  powod: [
    { kategoria: "Pobudzenie", liczba: Math.round(78 * (25 / 90)) },
    { kategoria: "Skupienie", liczba: Math.round(78 * (14 / 90)) },
    { kategoria: "Smak", liczba: Math.round(78 * (30 / 90)) },
    { kategoria: "Presja znajomych", liczba: Math.round(78 * (6 / 90)) },
    { kategoria: "Z przyzwyczajenia", liczba: Math.round(78 * (8 / 90)) },
    { kategoria: "Inne", liczba: Math.round(78 * (7 / 90)) }
  ],
  sytuacja: [
    { kategoria: "W szkole", liczba: Math.round(78 * (20 / 95)) },
    { kategoria: "W domu", liczba: Math.round(78 * (18 / 95)) },
    { kategoria: "Przed sprawdzianem", liczba: Math.round(78 * (10 / 95)) },
    { kategoria: "Przed graniem", liczba: Math.round(78 * (16 / 95)) },
    { kategoria: "W weekendy", liczba: Math.round(78 * (22 / 95)) },
    { kategoria: "Inne", liczba: Math.round(78 * (9 / 95)) }
  ],
  reakcja: [
    { kategoria: "Tak", liczba: Math.round(78 * (35 / 70)) },
    { kategoria: "Nie", liczba: Math.round(78 * (35 / 70)) }
  ],
  wiedza: [
    { kategoria: "Tak", liczba: Math.round(78 * (45 / 65)) },
    { kategoria: "Nie", liczba: Math.round(78 * (20 / 65)) }
  ]
};
