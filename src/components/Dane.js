import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Dane.css';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts';
import { mockDane } from './mockDane';

const COLORS = {
  czestosc: '#8884d8',
  powod: '#82ca9d',
  sytuacja: '#ffc658',
  reakcja: '#ff8042',
  wiedza: '#8dd1e1',
};

const sectionTitles = {
  czestosc: 'Częstotliwość spożywania napojów energetycznych',
  powod: 'Powody sięgania po napoje energetyczne',
  sytuacja: 'Sytuacje, w których uczniowie sięgają po napoje energetyczne',
  reakcja: 'Reakcja fizyczna po spożyciu',
  wiedza: 'Chęć poszerzenia wiedzy o skutkach',
};

function Dane() {
  const [dane, setDane] = useState({});
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [availableKeys, setAvailableKeys] = useState([]);

  useEffect(() => {
    const data = mockDane;
    setDane(data);
    console.log("Dane component mounted");
    console.log("mockDane:", mockDane);

    // Extract all possible data keys
    const keys = Object.keys(data);
    setAvailableKeys(keys);
  }, []);

  const handleButtonClick = (key) => {
    setSelectedKeys((prevKeys) =>
      prevKeys.includes(key) ? prevKeys.filter((k) => k !== key) : [...prevKeys, key]
    );
  };

  const prepareChartData = () => {
    if (selectedKeys.length === 0) {
      const emptyCategories = ['Brak danych'];
      return emptyCategories.map((category) => {
        const dataPoint = { kategoria: category };
        availableKeys.forEach((key) => {
          dataPoint[key] = 0;
        });
        return dataPoint;
      });
    }

    const chartData = [];
    const categories = new Set();

    // Collect all unique categories
    selectedKeys.forEach((key) => {
      if (dane[key]) {
        dane[key].forEach((item) => {
          categories.add(item.kategoria);
        });
      }
    });

    // Create chart data structure
    categories.forEach((category) => {
      const dataPoint = { kategoria: category };
      selectedKeys.forEach((key) => {
        const entry = dane[key]?.find((item) => item.kategoria === category);
        dataPoint[key] = entry ? entry.liczba : 0;
      });
      chartData.push(dataPoint);
    });

    return chartData;
  };

  return (
    <div className="sticky-charts-container" style={{ padding: '5px 20px' }}> {/* Adjusted padding to move the chart section higher */}
      <div className="nav-bar button-container">
        {availableKeys.map((key) => (
          <button
            key={key}
            className={`nav-item ${selectedKeys.includes(key) ? 'selected' : ''}`}
            onClick={() => handleButtonClick(key)}
          >
            {key}
          </button>
        ))}
      </div>

      <ScrollRevealChart
        data={prepareChartData()}
        dataKey="liczba"
        kategoriaKey="kategoria"
        chartType="bar"
        title={selectedKeys.length === 0 ? "Brak danych" : "Wybrane dane"}
        sectionColors={COLORS}
        selectedKeys={selectedKeys}
      />
    </div>
  );
}

const ScrollRevealChart = ({ data, kategoriaKey, title, sectionColors, selectedKeys }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const customTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const filteredPayload = payload.filter((item) => item.value !== 0);
      if (filteredPayload.length === 0) return null;

      return (
        <div className="custom-tooltip">
          <p className="label">{label}</p>
          {filteredPayload.map((item, index) => (
            <p key={index} style={{ color: item.color }}>
              {item.name}: {item.value}
            </p>
          ))}
        </div>
      );
    }

    return null;
  };

  const calculateBarSize = () => {
    const baseSize = 300; // Bazowa szerokość kolumn
    const scalingFactor = Math.max(1, selectedKeys.length * 2); // Zmniejszono wpływ liczby opcji na skalowanie
    return baseSize / scalingFactor;
  };

  return (
    <div ref={ref} className={`chart-container fade-in ${inView ? 'in-view' : ''}`} style={{ marginTop: '-20px' }}> {/* Adjusted margin to move the chart higher */}
      <h2>{title}</h2>
      <ResponsiveContainer width="100%" height={450}> {/* Chart height remains unchanged */}
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
          barCategoryGap={0}
          barSize={calculateBarSize()} // Dynamic scaling of bar width
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey={kategoriaKey}
            angle={-45}
            textAnchor="end"
            dy={10}
          />
          <YAxis allowDecimals={false} />
          <Tooltip content={customTooltip} />
          {selectedKeys.map((key, index) => (
            <Bar
              key={key}
              dataKey={key}
              fill={sectionColors[key] || '#8884d8'}
              name={key}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
      <div className="titles-row">
        {selectedKeys.map((key) => (
          <p key={key} className="section-title">{sectionTitles[key]}</p>
        ))}
      </div>
    </div>
  );
};

export default Dane;
