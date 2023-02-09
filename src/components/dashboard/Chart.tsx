import { chartData as Data } from "../../lib/data";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  ScriptableContext,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Filler
);

export default function ChartComp() {
  const data = () => {
    return {
      labels: Data.map((data) => data.month),
      options: {},
      datasets: [
        {
          label: "Assets",
          data: Data.map((data) => data.assets),
          borderColor: "#82D616",
          borderWidth: 2,
          fill: "start",
          backgroundColor: (context: ScriptableContext<"line">) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 170);
            gradient.addColorStop(0, "rgba(130, 214, 22, 0.7)");
            gradient.addColorStop(1, "rgba(250,174,50,0)");
            return gradient;
          },
        },
        {
          label: "Liabilities",
          data: Data.map((data) => data.liability),
          borderColor: "#FF8540",
          borderWidth: 2,
          fill: "start",
          backgroundColor: (context: ScriptableContext<"line">) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, "rgba(250,174,50,0.7)");
            gradient.addColorStop(1, "rgba(250,174,50,0)");
            return gradient;
          },
        },
      ],
    };
  };

  return (
    <div className="w-[99.99%] relative bg-white rounded-[1rem] shadow-date-view p-[2rem] space-y-[2rem]">
      <h4 className="text-gray-custom">Assets & Liabilities</h4>
      <Line
        data={data()}
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
