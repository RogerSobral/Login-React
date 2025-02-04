// PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Chart.css';
// Registrar os componentes necessários do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data, colors, title }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Gastos por Categoria',
        data: data.values,
        backgroundColor: colors,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true, // Habilita a responsividade
    maintainAspectRatio: false, // Permite que o gráfico mantenha a proporção livremente
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: title || 'Gastos por Categoria de Produtos',
      },
    },
  };

  return (
    <div className='chart'> {/* Definindo altura fixa para o gráfico */}
      <Pie data={chartData} options={options} aria-label={title} />
    </div>
  );
};

// Default props para o componente
PieChart.defaultProps = {
  data: {
    labels: ['Alimentos', 'Bebidas', 'Limpeza', 'Higiene Pessoal', 'Papelaria', 'Pet Shop'],
    values: [500, 300, 150, 200, 100, 250],
  },
  colors: [
    '#FF6384', // Alimentos
    '#36A2EB', // Bebidas
    '#FFCE56', // Limpeza
    '#4BC0C0', // Higiene Pessoal
    '#9966FF', // Papelaria
    '#FF9F40', // Pet Shop
  ],
};

export default PieChart;