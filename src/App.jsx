import { useState } from "react";
import Header from "./components/Header";
import WeatherForm from "./components/WeatherForm";
import WeatherChart from "./components/WeatherChart";
import WeatherTable from "./components/WeatherTable";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [inputs, setInputs] = useState({
    latitude: "",
    longitude: "",
    startDate: "",
    endDate: "",
  });
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div className="container mx-auto p-4 space-y-6">
        <WeatherForm
          inputs={inputs}
          setInputs={setInputs}
          setData={setData}
          setLoading={setLoading}
          setError={setError}
          loading={loading}
          error={error}
        />
        {data && (
          <>
            <WeatherChart data={data} />
            <WeatherTable data={data} page={page} setPage={setPage} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
