import { useCallback } from "react";
// import debounce from "lodash/debounce";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { validateInputs } from "../lib/validateInputs";

const WeatherForm = ({ inputs, setInputs, setData, setLoading, setError, loading, error }) => {
  const fetchWeatherData = useCallback(
    async () => {
      const validation = validateInputs(inputs);
      if (!validation.valid) {
        setError(validation.error);
        return;
      }

      setLoading(true);
      setError("");

      try {
        const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${inputs.latitude}&longitude=${inputs.longitude}&start_date=${inputs.startDate}&end_date=${inputs.endDate}&daily=temperature_2m_max,temperature_2m_min,temperature_2m_mean,apparent_temperature_max,apparent_temperature_min,apparent_temperature_mean`;

        const response = await fetch(url);
        const result = await response.json();

        if (result.error) {
          setError(result.reason || "API Error");
          return;
        }

        const formattedData = result.daily.time.map((date, index) => ({
          date,
          maxTemp: result.daily.temperature_2m_max[index],
          minTemp: result.daily.temperature_2m_min[index],
          meanTemp: result.daily.temperature_2m_mean[index],
          maxAppTemp: result.daily.apparent_temperature_max[index],
          minAppTemp: result.daily.apparent_temperature_min[index],
          meanAppTemp: result.daily.apparent_temperature_mean[index],
        }));

        setData(formattedData);
      } catch (err) {
        setError("Failed to fetch weather data");
      } finally {
        setLoading(false);
      }
    },
    [inputs, setLoading, setError, setData]
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Please enter a location </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <Input
            type="number"
            name="latitude"
            placeholder="Latitude"
            value={inputs.latitude}
            onChange={handleInputChange}
          />
          <Input
            type="number"
            name="longitude"
            placeholder="Longitude"
            value={inputs.longitude}
            onChange={handleInputChange}
          />
          <Input
            type="date"
            name="startDate"
            value={inputs.startDate}
            onChange={handleInputChange}
          />
          <Input
            type="date"
            name="endDate"
            value={inputs.endDate}
            onChange={handleInputChange}
          />
        </div>

        <form className="flex justify-center">
          <Button
            onClick={fetchWeatherData}
            disabled={loading}
            className="bg-blue-900 text-white rounded-md flex items-center justify-center px-6 py-2 space-x-2 mx-auto hover:bg-blue-900 focus:outline-none"
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            <span>Get Weather Data</span>
          </Button>
        </form>

        {error && <div className="text-red-500 mt-4">{error}</div>}
      </CardContent>
    </Card>
  );
};

export default WeatherForm;
