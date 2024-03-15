import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const AirConduction = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Destroy previous chart instance if exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create new chart instance
      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: data.labels,
          datasets: [
            {
              label: "Left",
              data: data.values2,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
            {
              label: "Right",
              data: data.values,
              fill: false,
              borderColor: "rgb(192, 75, 113)",
              tension: 0.1,
            },
            {
              label: "",
              data: [30, 30, 30, 30, 30, 30, 30],
              fill: false,
              borderColor: "rgb(209 209 209)",
              tension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              min: 0, // Set the minimum value for the y-axis
              max: 100, // Set the maximum value for the y-axis
              reverse: true,
            },
          },
          plugins: {
            tooltip: {
              filter: function (tooltipItem) {
                return tooltipItem.dataset.label !== ""; // Exclude the dataset with an empty label from showing tooltips
              },
            },
            legend: {
              labels: {
                filter: function (legendItem, chartData) {
                  return legendItem.text !== ""; // Exclude the label with an empty text from showing in the legend
                },
              },
            },
          },
        },
      });
    }

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default AirConduction;
