import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import './single.scss';

interface SingleProps {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart?: {
    dataKeys: {
      name: string;
      color: string;
    }[];
    data: object[];
  };
  activities?: { time: string; text: string }[];
}

const Single = ({ img, title, info, chart, activities }: SingleProps) => {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {img && <img src={img} alt="" />}
            <h1>{title}</h1>
            <button>Update</button>
          </div>
          <div className="details">
            {Object.entries(info).map((item) => {
              return (
                <div className="item" key={item[0]}>
                  <span className="itemTitle">{item[0]}</span>
                  <span className="itemValue">{item[1]}</span>
                </div>
              );
            })}
          </div>
        </div>
        <hr />
        {chart && (
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {chart.dataKeys.map((dataKey) => {
                  return (
                    <Line
                      type="monotone"
                      dataKey={dataKey.name}
                      stroke={dataKey.color}
                      activeDot={{ r: 8 }}
                    />
                  );
                })}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className="activities">
        <h2>Latest Activities</h2>
        <ul>
          {activities &&
            activities.map((activity) => {
              return (
                <li key={activity.text}>
                  <div>
                    <p>{activity.text}</p>
                    <time>{activity.time}</time>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Single;
