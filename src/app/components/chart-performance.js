"use client"
import { BarChart, Bar, CartesianGrid, XAxis, Tooltip, YAxis, ResponsiveContainer } from 'recharts';

export default function ChartPerformance({ data, title }) {
  return (
    <>
      <div className="relative flex flex-col w-full p-6 bg-white shadow-md bg-clip-border rounded-t-xl text-xl font-bold">
        {title}
      </div>
      <div className="relative flex flex-col w-full h-[350px] bg-white">
        <div className="relative shadow-md bg-white flex flex-col bg-clip-border rounded-b-xl">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" style={{ fontSize: '0.875rem' }} />
              <YAxis style={{ fontSize: '0.6875rem' }} />
              <Tooltip
                labelStyle={{ fontSize: '0.875rem' }}
                itemStyle={{ fontSize: '0.875rem' }}
              />
              <Bar dataKey="value" fill="#546e7a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
