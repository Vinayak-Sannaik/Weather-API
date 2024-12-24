import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const WeatherChart = ({ data }) => (
  <Card>
    <CardHeader>
      <CardTitle>Temperature Trends</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="maxTemp" stroke="#ef4444" name="Max Temp" />
            <Line type="monotone" dataKey="minTemp" stroke="#3b82f6" name="Min Temp" />
            <Line type="monotone" dataKey="meanTemp" stroke="#10b981" name="Mean Temp" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

export default WeatherChart;
