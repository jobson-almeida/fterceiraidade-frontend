"use client"
import React, { useEffect, useState, useTransition } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, Tooltip, YAxis, ResponsiveContainer } from 'recharts';
import { ActionChart } from '../actions/action-chart';

export default function ChartPerformance({ source, title }) {
  const [data, setData] = useState([])
  const [pending, startTransition] = useTransition()

  useEffect(() => {
    startTransition(async () => {
      const values = await ActionChart("chart_data");
      setData(values)
    })
  }, [])

  return (
    <>
      <div className="relative flex flex-col w-full p-6 bg-white shadow-md  bg-clip-border rounded-t-xl text-xl font-bold">
        {title}
      </div>
      <div className="relative flex flex-col w-full h-[350px] bg-white">
        <div className="relative shadow-md bg-white flex flex-col bg-clip-border rounded-b-xl">
          {pending ? (
            <div className='flex justify-center items-center h-[350px]'>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#546e7a]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height={350} >
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" style={{
                  fontSize: '0.875rem'
                }}
                />
                <YAxis style={{
                  fontSize: '0.6875rem'
                }}
                />
                <Tooltip labelStyle={{
                  fontSize: '0.875rem'
                }}
                  itemStyle={{
                    fontSize: '0.875rem'
                  }}
                />
                <Bar dataKey="value" fill="#546e7a" />
              </BarChart>
            </ResponsiveContainer>)}
        </div>
      </div>
    </>
  );
}
