import React from "react";
import FormattedDate from "./formattedDate.js";
import WeatherTemperature from "./WeatherTemperature.js";
import WeatherIcon from "./WeatherIcons";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} />
          <div>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}% </li>
            <li>Wind: {props.data.wind} km/hr </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
