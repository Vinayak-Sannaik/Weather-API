import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WeatherTable = ({ data, page, setPage }) => {
  const rowsPerPage = 10;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Weather Data Table</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Max Temp</th>
                <th className="p-2 text-left">Min Temp</th>
                <th className="p-2 text-left">Mean Temp</th>
                <th className="p-2 text-left">Max App Temp</th>
                <th className="p-2 text-left">Min App Temp</th>
                <th className="p-2 text-left">Humidity</th>
                <th className="p-2 text-left">Precipitation</th>
                <th className="p-2 text-left">Wind Speed</th>
              </tr>
            </thead>
            <tbody>
              {data.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((row, index) => (
                <tr key={index}>
                  <td className="p-2">{row.date}</td>
                  <td className="p-2">{row.maxTemp}°C</td>
                  <td className="p-2">{row.minTemp}°C</td>
                  <td className="p-2">{row.meanTemp}°C</td>
                  <td className="p-2">{row.maxAppTemp}°C</td>
                  <td className="p-2">{row.minAppTemp}°C</td>
                  <td className="p-2">{row.humidity}%</td>
                  <td className="p-2">{row.precipitation}mm</td>
                  <td className="p-2">{row.windSpeed}km/h</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4">
          <Button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="bg-blue-500 text-white"
          >
            Previous
          </Button>
          <span className="text-lg">
            Page {page} of {Math.ceil(data.length / rowsPerPage)}
          </span>
          <Button
            disabled={page === Math.ceil(data.length / rowsPerPage)}
            onClick={() => setPage(page + 1)}
            className="bg-blue-500 text-white"
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherTable;
