import { getCurrentDate } from "../utils/currentData";
import { MdLocationOn } from "react-icons/md";

interface Props {
  data: {
    current: {
      condition: {
        text: string;
        icon: string;
      };
      temp_c: number;
    };
    location: {
      name: string;
      country: string;
    };
  };
}

export default function Current({ data }: Props) {
  const currentDate = getCurrentDate();
  const weatherIcon = data.current.condition.icon;
  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2">
      <div className="flex items-center">
        <div>
          <h1 className="text-3xl text-white"> Today</h1>
          <p className="text-white">{currentDate}</p>
        </div>
        {weatherIcon && (
          <img
            className="w-[50px] object-cover h-20"
            src={weatherIcon}
            alt={data.current.condition.text}
          />
        )}
      </div>
      <div>
        <p className=" text-5xl text-white">
          {data.current.temp_c.toFixed()} <span>°</span>
        </p>
        <span className="text-white">{data.current.condition.text}</span>
      </div>
      <div className="flex items-center text-black bg-white/90 px-2 py-2 rounded-xl">
        <MdLocationOn />
        <span>
          {data.location.name}, {data.location.country}
        </span>
      </div>
    </div>
  );
}
