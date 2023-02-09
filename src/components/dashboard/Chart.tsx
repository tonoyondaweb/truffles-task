import { chartData as Data } from "../../lib/data";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Legend);

export default function ChartComp() {
  const chartData = {
    labels: Data.map((data) => data.month),
    options: {},
    datasets: [
      {
        label: "Assets",
        data: Data.map((data) => data.assets),
        borderColor: "#82D616",
        borderWidth: 2,
      },
      {
        label: "Liabilities",
        data: Data.map((data) => data.liability),
        borderColor: "#FF8540",
        borderWidth: 2,
      },
    ],
  };
  return (
    <div className="w-[99%] relative bg-white rounded-[1rem] shadow-date-view p-[2rem] space-y-[2rem]">
      <h4 className="text-gray-custom">Assets & Liabilities</h4>
      <Line
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: true,
              position: "bottom",
              align: "start",
              labels: {
                boxHeight: 2,
              },
            },
          },
          elements: {
            line: { tension: 0.4 },
            point: {
              radius: 0,
            },
          },
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            x: {
              grid: { display: false },
            },
            y: {
              grid: { display: true },
              border: { dash: [4, 8] },
              min: 0,
              max: 500,
              ticks: {
                stepSize: 100,
              },
            },
          },
        }}
      />
    </div>
  );
}
