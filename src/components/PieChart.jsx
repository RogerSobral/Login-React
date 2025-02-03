// PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registrar os componentes necessários do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Alimentos', 'Bebidas', 'Limpeza', 'Higiene Pessoal', 'Papelaria', 'Pet Shop'],
    datasets: [
      {
        label: 'Gastos por Categoria',
        data: [500, 300, 150, 200, 100, 250],  // Valores de gasto por categoria
        backgroundColor: [
          '#FF6384', // Alimentos
          '#36A2EB', // Bebidas
          '#FFCE56', // Limpeza
          '#4BC0C0', // Higiene Pessoal
          '#9966FF', // Papelaria
          '#FF9F40'  // Pet Shop
        ],
        hoverOffset: 10, // Destaque no hover
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right', // Posição da legenda
      },
      title: {
        display: true,
        text: 'Gastos por Categoria de Produtos',
      },
    },
  };

  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
