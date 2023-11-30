"use client";
import React, { useState } from "react";
import Input from "./components/input";
import Current from "./components/current";
import Forecast from "./components/forecast";
import WeatherDetails from "./components/details";

export default function Home() {
  const [data, setData] = useState({});
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${"70efec303fa745bbae3193155232711"}&q=${city}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error();
        }
        const data = await res.json();
        setData(data);
        setCity("");
        setError("");
      } catch (error) {
        setError("City not found");
        setData({});
      }
    }
  };
  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Weather App</h2>
        <p className="text-xl"> Enter a valid city name for forecast!</p>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <p className="text-3xl font-semibold mb-4">City Not Found</p>
        <p className="text-xl">Enter Valid City Name!</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className="flex md:flex-row flex-col p-12 items-center justify-between">
          <Current data={data} />
          <Forecast data={data} />
        </div>
        <div>
          <WeatherDetails data={data} />
        </div>
      </>
    );
  }

  return (
    <body>
      <div className="bg-cover bg-gradient-to-r from-blue-700 to-blue-400">
        <div className="bg-white/25 w-full flex flex-col h-fit">
          <div className="flex flex-col md:flex-row justify-between items-center p-12">
            <Input handleSearch={handleSearch} setCity={setCity} />
            <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl font-bold">
              {" "}
              Utku's Forecast App{" "}
            </h1>
          </div>
          {content}
        </div>
      </div>
    </body>
  );
}
