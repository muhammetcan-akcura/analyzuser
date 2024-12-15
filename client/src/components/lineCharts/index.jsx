import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Örnek veri
export default function MUIAreaChart({ data }) {
  const [activeMetrics, setActiveMetrics] = useState({
    totalCharge: true,
    count: true,
  });

  const processData = (data) => {

    const groupedData = {};

    data.forEach(item => {
      // Tarih bilgisini al ve istediğimiz formatta (gün/ay/yıl) dönüştür
      const date = new Date(item.Created);
      const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear().toString().slice(-2)}`;

      if (!groupedData[formattedDate]) {
        groupedData[formattedDate] = { totalCharge: 0, count: 0 };
      }
      groupedData[formattedDate].totalCharge += item.Charge;
      groupedData[formattedDate].count += 1;
    });

    // Gruplanmış veriyi bir diziye dönüştür
    const chartData = Object.keys(groupedData).map(date => ({
      date,
      totalCharge: groupedData[date].totalCharge,
      count: groupedData[date].count,
    }));

    // Tarihlere göre sıralama (en eski tarihten yeni tarihe)
    chartData.sort((a, b) => new Date(a.date.split('/').reverse().join('/')) - new Date(b.date.split('/').reverse().join('/')));

    return chartData;
  };

  const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: '900px',
    margin: 'auto',
    boxShadow: theme.shadows[3],
  }));

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <Card>
          <CardContent>
            <Typography variant="subtitle2">{label}</Typography>
            {payload.map((entry, index) => (
              <Typography key={`item-${index}`} variant="body2" style={{ color: entry.color }}>
                {`${entry.name}: ${entry.value}`}
              </Typography>
            ))}
          </CardContent>
        </Card>
      );
    }
    return null;
  };

  const chartData = processData(data);

  return (
    <StyledCard>
      <CardHeader
        title={data[0]?.User}
       subheader={data && data[0] ? `${data[0].Service ?? "Service Unavailable"} (${data[0].Provider ?? "Provider Unknown"})` : "Loading..."}


      />
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="none" stroke="none" /> {/* Çizgiler kaldırıldı */}
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            {activeMetrics.totalCharge && (
              <Area type="monotone" dataKey="totalCharge" stroke="#1976d2" fill="#1976d2" fillOpacity={0.3} />
            )}
            {activeMetrics.count && (
              <Area type="monotone" dataKey="count" stroke="#9c27b0" fill="#9c27b0" fillOpacity={0.3} />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </StyledCard>
  );
}
