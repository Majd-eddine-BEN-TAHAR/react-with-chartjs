import React, { useEffect } from "react";
import { Chart } from "chart.js";
import "./MyChart.css";

const MyChart = ({ canvas, type }) => {
  const charTypes = ["bar", "line", "radar", "doughnut", "pie"];
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let myChart;

    const ctx = canvas.current.getContext("2d");
    fetch("https://api.exchangeratesapi.io/latest")
      .then((res) => res.json())
      .then((res) => {
        const currencies = [];
        const values = [];
        const colors = [];
        for (const key in res.rates) {
          if (key === "IDR" || key === "MYR" || key === "KRW") {
          } else {
            currencies.push(key);
            values.push(res.rates[key]);
            let color =
              "#" +
              (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6) +
              "99";
            colors.push(color);
          }
        }

        myChart = new Chart(ctx, {
          type: charTypes[type],
          data: {
            labels: currencies,
            datasets: [
              {
                // label: false,
                data: values,
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 1,
              },
            ],
          },
          options: {
            legend: {
              display: type > 2 ? true : false,
            },
            scales: {
              yAxes: [
                {
                  minBarLength: 10,
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          },
        });
      });
  });
  return (
    <div className="chartDiv">
      <canvas ref={canvas}></canvas>
    </div>
  );
};

export default MyChart;
