// Dane.js

import React, { useEffect, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import { mockDane } from './mockDane';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#8dd1e1', '#d0ed57'];

function Dane() {
  const [dane, setDane] = useState({});

  useEffect(() => {
    setDane(mockDane);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Częstotliwość spożywania napojów energetycznych</h2>
      {dane.czestosc?.length > 0 && (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dane.czestosc} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="kategoria" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="liczba" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      )}

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
