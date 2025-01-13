import { useEffect, useState } from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

function CategoriesPieChart({ transactions }) {
  const [pie, setPie] = useState([]);

  const categoryColors = {
    Alimentacion: '#fd7e14',
    Otros: '#dc3545',
    Vivienda: '#007bff',
    Transporte: '#ffc107',
    Trabajo: '#03bb85',
  };

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
      const categoriesChartValues = transactions.reduce(
        (categories, transaction) => {
          const category = categories.find(
            (item) => item.name === transaction.category
          );

          if (!category) {
            categories.push({
              name: transaction.category,
              value: transaction.amount,
            });
          } else {
            category.value += transaction.amount;
          }

          return categories;
        },
        []
      );

      setPie(categoriesChartValues);
      console.log(categoriesChartValues);
    }
  }, [transactions]);

  return (
    <PieChart width={450} height={450}>
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
          <Cell
            key={`cell-${index}`}
            fill={categoryColors[entry.name] || '#6c757d'}
          />
        ))}
      </Pie>
      <Legend />
      <Tooltip />
    </PieChart>
  );
}

export default CategoriesPieChart;
