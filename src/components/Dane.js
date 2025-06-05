import React, { useState } from "react";
import "../App.css";
import chlopak from "./zebranedanechlopak.png";
import dziewczyna from "./zebranedanedziewczyna.png";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend,
  LineChart, Line,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from "recharts";
import { useInView } from "react-intersection-observer";

export default function Dane() {
  const [selectedButton, setSelectedButton] = useState("energetyki");

  const frequencyData = [
    { name: "0–1/tydz.", value: 45 },
    { name: "2–3/tydz.", value: 30 },
    { name: "4+/tydz.", value: 25 },
  ];

  const reasonsData = [
    { name: "Smak", value: 40 },
    { name: "Energia", value: 35 },
    { name: "Presja rówieśnicza", value: 15 },
    { name: "Inne", value: 10 },
  ];

  const wiekData = [
    { wiek: 11, spozycie: 10 },
    { wiek: 12, spozycie: 18 },
    { wiek: 13, spozycie: 30 },
    { wiek: 14, spozycie: 42 },
    { wiek: 15, spozycie: 55 },
  ];

  const skutkiData = [
    { nazwa: "Bezsenność", wartosc: 70 },
    { nazwa: "Nerwowość", wartosc: 55 },
    { nazwa: "Ból głowy", wartosc: 40 },
    { nazwa: "Zawroty głowy", wartosc: 35 },
    { nazwa: "Brak koncentracji", wartosc: 65 },
  ];

  const zrodlaData = [
    { grupa: "Chłopcy", energetyk: 50, kawa: 20, slodycze: 40, sen: 15 },
    { grupa: "Dziewczyny", energetyk: 30, kawa: 35, slodycze: 50, sen: 25 },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f7f"];

  const { ref: barRef, inView: barInView } = useInView({ triggerOnce: true });
  const { ref: pieRef, inView: pieInView } = useInView({ triggerOnce: true });
  const { ref: lineRef, inView: lineInView } = useInView({ triggerOnce: true });
  const { ref: radarRef, inView: radarInView } = useInView({ triggerOnce: true });
  const { ref: stackedRef, inView: stackedInView } = useInView({ triggerOnce: true });

  return (
    <div className="dane-container">
      <div className="dane-images">
        <img src={chlopak} alt="Chłopak" className="dane-img" />
        <img src={dziewczyna} alt="Dziewczyna" className="dane-img" />
      </div>

      <div className="dane-buttons">
        <button onClick={() => setSelectedButton("energetyki")}>
          Energetyki
        </button>
      </div>

      {selectedButton === "energetyki" && (
        <div className="dane-content">

          <div className="chart-container" ref={barRef}>
            <div className="chart-title">Częstotliwość spożycia napojów energetycznych</div>
            {barInView && (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={frequencyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis unit="%" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#8884d8" animationDuration={800} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>

          <div className="chart-container" ref={pieRef}>
            <div className="chart-title">Powody sięgania po napoje energetyczne</div>
            {pieInView && (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={reasonsData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#82ca9d"
                    label
                    animationDuration={900}
                  >
                    {reasonsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>

          <div className="chart-container" ref={lineRef}>
            <div className="chart-title">Spożycie napojów energetycznych a wiek</div>
            {lineInView && (
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={wiekData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="wiek" />
                  <YAxis unit="%" />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="spozycie"
                    stroke="#ff7f50"
                    strokeWidth={3}
                    animationDuration={1000}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>

          <div className="chart-container" ref={radarRef}>
            <div className="chart-title">Odczuwane skutki spożywania energetyków</div>
            {radarInView && (
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart outerRadius={120} data={skutkiData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="nazwa" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar
                    name="Uczniowie"
                    dataKey="wartosc"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            )}
          </div>

          <div className="chart-container" ref={stackedRef}>
            <div className="chart-title">Źródła pobudzania energii wg płci</div>
            {stackedInView && (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={zrodlaData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="grupa" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="energetyk" stackId="a" fill="#ff6666" animationDuration={700} />
                  <Bar dataKey="kawa" stackId="a" fill="#ffcc66" animationDuration={800} />
                  <Bar dataKey="slodycze" stackId="a" fill="#99ccff" animationDuration={900} />
                  <Bar dataKey="sen" stackId="a" fill="#99ff99" animationDuration={1000} />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>

        </div>
      )}
    </div>
  );
}
