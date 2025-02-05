// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './Chart.css'; // Certifique-se de que este arquivo CSS existe

// Registrar os componentes necessários do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['Supermercado A', 'Supermercado B', 'Supermercado C', 'Supermercado D'],
    datasets: [
      {
        label: 'Volume de Compras',
        data: [1200, 1500, 800, 2000], // Exemplo de volumes de compras
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // Cor para Supermercado A
          'rgba(54, 162, 235, 0.6)', // Cor para Supermercado B
          'rgba(255, 206, 86, 0.6)', // Cor para Supermercado C
          'rgba(75, 192, 192, 0.6)', // Cor para Supermercado D
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)', // Cor da borda para Supermercado A
          'rgba(54, 162, 235, 1)', // Cor da borda para Supermercado B
          'rgba(255, 206, 86, 1)', // Cor da borda para Supermercado C
          'rgba(75, 192, 192, 1)', // Cor da borda para Supermercado D
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Volume de Compras por Fornecedor',
      },
    },
  };

  return (
    <div className='chart'>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;