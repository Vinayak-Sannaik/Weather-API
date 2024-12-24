import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const WeatherTable = ({ data, page, setPage }) => {
  const rowsPerPage = 10;
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const totalPages = Math.max(1, Math.ceil(data.length / rowsPerPage));

  useEffect(() => {
    if (page < 1) setPage(1);
  }, [page, setPage]);

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
              {data.slice(startIndex, endIndex).map((row, index) => (
                <tr key={startIndex + index} className="hover:bg-gray-50">
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
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page <= 1}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Previous
          </Button>
          <span className="text-lg">
            Page {page} of {totalPages}
          </span>
          <Button
            onClick={() => setPage(Math.min(page + 1, totalPages))}
            disabled={page >= totalPages}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherTable;