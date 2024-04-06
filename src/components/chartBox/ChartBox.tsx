import { Link } from "react-router-dom";
import "./chartbox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type ChartBoxProps = {
  icon: string;
  title: string;
  color: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const ChartBox = ({
  icon,
  title,
  color,
  dataKey,
  number,
  percentage,
  chartData,
}: ChartBoxProps) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={icon} alt="" />
          <span>{title}</span>
        </div>
        <h1>{number}</h1>
        <Link to="/">View all</Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart width={300} height={100} data={chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 50 }}
              />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="texts">
            <span
              className="percentage"
              style={{ color: percentage < 0 ? "tomato" : "limegreen" }}
            >
              {percentage}%
            </span>
            <span className="duration">this month</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
