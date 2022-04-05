import React from 'react';
import { Container } from 'react-bootstrap';
import { BarChart, Bar, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
      {
            "month": "Mar",
            "investment": 100000,
            "sell": 2410,
            "revenue": 10401
      },
      {
            "month": "Apr",
            "investment": 200000,
            "sell": 4230,
            "revenue": 24500
      },
      {
            "month": "May",
            "investment": 500000,
            "sell": 7260,
            "revenue": 67010
      },
      {
            "month": "Jun",
            "investment": 500000,
            "sell": 5290,
            "revenue": 40405
      },
      {
            "month": "Jul",
            "investment": 600000,
            "sell": 6010,
            "revenue": 50900
      },
      {
            "month": "Aug",
            "investment": 700000,
            "sell": 6700,
            "revenue": 61000
      }
];

const Dashboard = () => (
      <Container className="mx-auto row row-cols-2 justify-content-between">
            <BarChart
                  width={500}
                  height={300}

                  data={data}
                  className="mt-4"
            >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis dataKey="investment" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="investment" fill="#8884d8" />
                  <Bar dataKey="sell" fill="#DE4839" />
                  <Bar dataKey="revenue" fill="#82ca9d" />
            </BarChart>
            <LineChart
                  width={500}
                  height={300}
                  data={data}
                  className="mt-4"
            >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line yAxisId="right" type="monotone" dataKey="sell" stroke="#DE4839" />
                  <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#82ca9d" />
            </LineChart>
      </Container>

);



export default Dashboard;