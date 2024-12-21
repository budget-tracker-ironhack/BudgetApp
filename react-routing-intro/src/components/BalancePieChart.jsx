import { useEffect, useState } from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

function BalancePieChart({ transactions }) {
  const [pie, setPie] = useState([]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  useEffect(() => {
    if (transactions) {
      const balanceChartValues = transactions.reduce(
        (balances, transaction) => {
          if (transaction.type === 'expense') {
            balances.find((item) => item.name === 'Gastos').value +=
              transaction.amount;
          } else {
            balances.find((item) => item.name === 'Ingresos').value +=
              transaction.amount;
          }

          return balances;
        },
        [
          { name: 'Ingresos', value: 0 },
          { name: 'Gastos', value: 0 },
        ]
      );

      setPie(balanceChartValues);
    }
  }, [transactions]);

  return (
    <PieChart width={450} height={300}>
      <Pie
        data={pie}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={120}
        fill="#8884d8"
        dataKey="value"
      >
        {pie.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
      <Tooltip />
    </PieChart>
  );
}

export default BalancePieChart;
