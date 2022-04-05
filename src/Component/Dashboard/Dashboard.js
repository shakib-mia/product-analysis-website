import React from 'react';
import { Container } from 'react-bootstrap';
import { BarChart, Bar, Cell, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
      {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
      },
      {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
      },
      {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
      },
      {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
      },
      {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
      },
      {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
      }
];

const Dashboard = () => (
      <Container>
            <div className="d-flex justify-content-around">
                  <LineChart width={500} height={300} data={data} margin={{ left: 15 }} className="mt-4">
                        <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                  </LineChart>

                  <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                              right: 30,
                              left: 20,
                              bottom: 5,
                        }}
                        className="mt-4"
                  >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="sell" fill="#DE4839" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                  </BarChart>
            </div>
      </Container>
);



export default Dashboard;