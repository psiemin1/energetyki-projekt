import React, { useEffect, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  PieChart, Pie, Cell, Legend
} from 'recharts';

const Kategorie = ["Codziennie", "Kilka razy w tygodniu", "Raz w tygodniu", "Raz w miesiącu", "Nigdy"];
const Powody = ["Pobudzenie", "Skupienie", "Smak", "Presja znajomych", "Z przyzwyczajenia", "Inne"];
const Sytuacje = ["W szkole", "W domu", "Przed sprawdzianem", "Przed graniem", "W weekendy", "Inne"];
const Reakcje = ["Tak", "Nie"];
const Wiedza = ["Tak", "Nie"];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#8dd1e1', '#d0ed57'];

function Dane() {
  const [dane, setDane] = useState({});

  useEffect(() => {
    const raw = localStorage.getItem("wynikiAnkietyZbiorcze");
    if (!raw) return;
    const odpowiedziArray = JSON.parse(raw);

    const zlicz = (kategorie, key) => {
      const wystapienia = kategorie.reduce((acc, k) => {
        acc[k] = 0;
        return acc;
      }, {});

      odpowiedziArray.forEach(odp => {
        const wartosc = odp[key];
        if (wartosc && kategorie.includes(wartosc)) {
          wystapienia[wartosc]++;
        }
      });

      return Object.entries(wystapienia).map(([kategoria, liczba]) => ({ kategoria, liczba }));
    };

    setDane({
      czestosc: zlicz(Kategorie, 'czestosc'),
      powod: zlicz(Powody, 'powod'),
      sytuacja: zlicz(Sytuacje, 'sytuacja'),
      reakcja: zlicz(Reakcje, 'reakcja'),
      wiedza: zlicz(Wiedza, 'wiedza')
    });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2> Częstotliwość spożywania napojów energetycznych</h2>
      {dane.czestosc?.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dane.czestosc} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="kategoria" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="liczba" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      ) : <p>Brak danych do wyświetlenia. Wypełnij ankietę.</p>}

      {dane.powod?.length > 0 && (
        <>
          <h2>Powody sięgania po napoje energetyczne</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={dane.powod} dataKey="liczba" nameKey="kategoria" cx="50%" cy="50%" outerRadius={100}>
                {dane.powod.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </>
      )}

      {dane.sytuacja?.length > 0 && (
        <>
          <h2>Sytuacje, w których uczniowie sięgają po napoje</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dane.sytuacja} layout="vertical" margin={{ top: 20, right: 30, left: 100, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" allowDecimals={false} />
              <YAxis dataKey="kategoria" type="category" />
              <Tooltip />
              <Bar dataKey="liczba" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </>
      )}

      {dane.reakcja?.length > 0 && (
        <>
          <h2>Reakcja fizyczna po spożyciu</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dane.reakcja} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="kategoria" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="liczba" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </>
      )}

      {dane.wiedza?.length > 0 && (
        <>
          <h2>Chęć poszerzenia wiedzy o skutkach</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dane.wiedza} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="kategoria" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="liczba" fill="#ff8042" />
            </BarChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
}

export default Dane;
