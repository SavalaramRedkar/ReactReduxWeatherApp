import React from "react";
import { useSelector } from "react-redux";
import Search from "./components/Search";
import Weather from "./components/Weather";
import Alert from "react-bootstrap/Alert";

function App() {
  const weatherData = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  const errorMessage = useSelector((state) => state.error);

  return (
    <div className="container bg-white p-4 mt-5">
      <h1 className="text-center mb-4">React Redux Weather App</h1>
      <Search />
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      {loading && <p>Loading...</p>}
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;
