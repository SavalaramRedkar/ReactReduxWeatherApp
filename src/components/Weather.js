import React from "react";
import Card from "react-bootstrap/Card";

const Weather = ({ data }) => {
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(2);

  return (
    <React.Fragment>
      <h3 style={{ marginBottom: "15px" }}>
        {data.name} - {data.sys.country}
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Card
          style={{ marginRight: "1rem", width: "20%", textAlign: "center" }}
        >
          <Card.Header>
            <p>{data.weather[0].description}</p>
          </Card.Header>
          <Card.Body>
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
              alt=""
            />
          </Card.Body>
        </Card>
        <Card
          style={{ marginRight: "1rem", width: "20%", textAlign: "center" }}
        >
          <Card.Header>
            <p>temp</p>
          </Card.Header>
          <Card.Body>
            <p className="mb-2">{data.main.temp}K</p>
            <p className="mb-2">
              {fahrenheit}
              <sup>&#8457;</sup>
            </p>
            <p>
              {celsius}
              <sup>&#8451;</sup>
            </p>
          </Card.Body>
        </Card>
        <Card
          style={{ marginRight: "1rem", width: "20%", textAlign: "center" }}
        >
          <Card.Header>
            <p>humidity</p>
          </Card.Header>
          <Card.Body>
            <p>{data.main.humidity}</p>
          </Card.Body>
        </Card>
        <Card
          style={{ marginRight: "1rem", width: "20%", textAlign: "center" }}
        >
          <Card.Header>
            <p>pressure</p>
          </Card.Header>
          <Card.Body>
            <p>{data.main.pressure}</p>
          </Card.Body>
        </Card>
        <Card style={{ width: "20%", textAlign: "center" }}>
          <Card.Header>
            <p>wind</p>
          </Card.Header>
          <Card.Body>
            <p>{data.wind.speed} m/s</p>
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Weather;
