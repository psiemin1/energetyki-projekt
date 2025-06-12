// Dane.js

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Dane.css';
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
    console.log("Dane component mounted");
    console.log("mockDane:", mockDane);
  }, []);

  return (
    <div className="sticky-charts-container" style={{ padding: '20px' }}>
      {dane.czestosc?.length > 0 && (
        <ScrollRevealChart data={dane.czestosc} dataKey="liczba" kategoriaKey="kategoria" chartType="bar" fill="#8884d8" title="Częstotliwość spożywania napojów energetycznych" />
      )}

      {dane.powod?.length > 0 && (
        <ScrollRevealChart data={dane.powod} dataKey="liczba" kategoriaKey="kategoria" chartType="pie" colors={COLORS} title="Powody sięgania po napoje energetyczne"/>
      )}

      {dane.sytuacja?.length > 0 && (
        <ScrollRevealChart data={dane.sytuacja} dataKey="liczba" kategoriaKey="kategoria" chartType="bar" fill="#82ca9d" title="Sytuacje, w których uczniowie sięgają po napoje energetyczne" margin={{ top: 20, right: 30, left: 100, bottom: 5 }} />
      )}

      {dane.reakcja?.length > 0 && (
        <ScrollRevealChart data={dane.reakcja} dataKey="liczba" kategoriaKey="kategoria" chartType="bar" fill="#ffc658" title="Reakcja fizyczna po spożyciu" />
      )}

      {dane.wiedza?.length > 0 && (
        <ScrollRevealChart data={dane.wiedza} dataKey="liczba" kategoriaKey="kategoria" chartType="bar" fill="#ff8042" title="Chęć poszerzenia wiedzy o skutkach" />
      )}
    </div>
  );
}

const ScrollRevealChart = ({ data, dataKey, kategoriaKey, chartType, fill, colors, layout, title }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  console.log("Layout:", layout);

  return (
    <div ref={ref} className={`chart-container fade-in ${inView ? 'in-view' : ''}`}>
      <h2>{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        {chartType === 'bar' && (
          <BarChart data={data} layout={layout} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={kategoriaKey} />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey={dataKey} fill={fill} className={`bar-animation ${inView ? 'in-view' : ''}`}/>
          </BarChart>
        )}
        {chartType === 'pie' && (
          <PieChart>
            <Pie data={data} dataKey={dataKey} nameKey={kategoriaKey} cx="50%" cy="50%" outerRadius={100}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default Dane;
