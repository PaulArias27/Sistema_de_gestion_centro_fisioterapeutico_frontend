import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { mes: "Ene", ventas: 1200 },
  { mes: "Feb", ventas: 1800 },
  { mes: "Mar", ventas: 1500 },
  { mes: "Abr", ventas: 2200 },
  { mes: "May", ventas: 2500 },
  { mes: "Jun", ventas: 2800 },
  { mes: "Jul", ventas: 3200 },
];

function IncomeChart() {
  return (
    <Card
      sx={{
        borderRadius: 4,
        height: "100%",
      }}
    >
      <CardContent>

        <Typography
          variant="h6"
          fontWeight={700}
          mb={3}
        >
          Ingresos Mensuales
        </Typography>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="mes" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="ventas"
              stroke="#F57C00"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </CardContent>
    </Card>
  );
}

export default IncomeChart;