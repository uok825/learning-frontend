interface Forecast {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    maxtemp_c: number;
    mintemp_c: number;
  };
}
interface DataProps {
  data: {
    forecast: {
      forecastday: Forecast[];
    };
  };
}
export default function Forecast({ data }: DataProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 w-full">
      {data.forecast.forecastday.map((day, index) => (
        <div
          key={index}
          className="bg-white/40 p-2 text-center rounded-lg flex flex-col items-center"
        >
          <p className="text-white">
            {new Date(day.date).toLocaleString("en-US", {
              weekday: "short",
            })}
          </p>
          <img src={day.day.condition.icon} alt={day.day.condition.text} />
          <div>
            <p>{day.day.maxtemp_c.toFixed()}°</p>
            <p>{day.day.mintemp_c.toFixed()}°</p>
          </div>
        </div>
      ))}
    </div>
  );
}
