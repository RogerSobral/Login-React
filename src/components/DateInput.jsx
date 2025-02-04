// npm install date-fns

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Importa os estilos do DatePicker
import 'font-awesome/css/font-awesome.min.css'; // Importa o CSS do Font Awesome
import { ptBR } from 'date-fns/locale'; // Importa a localização em português
import { registerLocale } from 'react-datepicker'; // Importa a função para registrar a localização
import './DateInput.css'; // Certifique-se de criar um arquivo CSS para os estilos

// Registra a localização em português
registerLocale('pt-BR', ptBR);

const DateInput = () => {
    const [date, setDate] = useState(null); // Inicializa o estado da data

    return (
        <div className="date-input-container">
            <DatePicker
                selected={date}
                onChange={(date) => setDate(date)} // Atualiza o estado com a data selecionada
                placeholderText="Selecione uma data"
                className="custom-date-input"
                dateFormat="dd/MM/yyyy" // Formato da data
                locale="pt-BR" // Define a localização para português
            />
            <i className="fa fa-calendar calendar-icon"></i> {/* Ícone de calendário */}
        </div>
    );
};

export default DateInput;