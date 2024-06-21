"use client"
import React, { useState, useEffect, ChangeEvent } from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface DataVisualizerProps {
  data: Array<Record<string, any>>;
}

const DataVisualizer: React.FC<DataVisualizerProps> = ({ data }) => {
  const [selectedField, setSelectedField] = useState<string>('');
  const [detailField, setDetailField] = useState<string>('');
  const [secondDetailField, setSecondDetailField] = useState<string>('');
  const [fields, setFields] = useState<string[]>([]);
  const [showDynamicTable, setShowDynamicTable] = useState<boolean>(false);

  useEffect(() => {
    if (data.length > 0) {
      const keys = Object.keys(data[0]);
      setFields(keys);
      setSelectedField(keys[0]);
      setDetailField(keys[1]);
      setSecondDetailField(keys[2]);
    }
  }, [data]);

  const handleFieldChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedField(e.target.value);
  };

  const handleDetailFieldChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setDetailField(e.target.value);
  };

  const handleSecondDetailFieldChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSecondDetailField(e.target.value);
  };

  const aggregatedData = data.reduce<Record<string, number>>((acc, curr) => {
    const key = secondDetailField ? `${curr[detailField]}-${curr[secondDetailField]}` : curr[detailField];
    if (!acc[key]) {
      acc[key] = 0;
    }
    acc[key] += curr[selectedField];
    return acc;
  }, {});

  const chartData: { series: { name: string; data: number[] }[]; options: ApexOptions } = {
    series: [{
      name: 'Total',
      data: Object.values(aggregatedData)
    }],
    options: {
      chart: {
        type: 'bar'
      },
      xaxis: {
        categories: Object.keys(aggregatedData)
      }
    }
  };

  return (
    <div className="mt-4">
      <div className='row'>
        <div className="mb-4">
          <label className="block mb-2">Campo para Soma/Totalização:</label>
          <select className="p-2 border" value={selectedField} onChange={handleFieldChange}>
            {fields.map(field => <option key={field} value={field}>{field}</option>)}
          </select>
        </div>
      </div>

      <div className='flex flex-row gap-6'>
        <div className="mb-4">
          <label className="block mb-2">Detalhamento dos Valores:</label>
          <select className="p-2 border" value={detailField} onChange={handleDetailFieldChange}>
            {fields.map(field => <option key={field} value={field}>{field}</option>)}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Segunda Dimensão para Detalhamento:</label>
          <select className="p-2 border" value={secondDetailField} onChange={handleSecondDetailFieldChange}>
            {fields.map(field => <option key={field} value={field}>{field}</option>)}
          </select>
        </div>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={() => setShowDynamicTable(!showDynamicTable)}>
        {showDynamicTable ? 'Ocultar' : 'Exibir'} Tabela Dinâmica
      </button>
      {
        showDynamicTable && (
          <div className="mt-4">
            <h2 className="text-lg font-bold">Tabela Dinâmica</h2>
            <table className="min-w-full bg-accent rounded">
              <thead>
                <tr>
                  <th className="py-2">Chave</th>
                  <th className="py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(aggregatedData).map(([key, value]) => (
                  <tr key={key}>
                    <td className="py-2 px-4 border">{key}</td>
                    <td className="py-2 px-4 border">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
      <div className='bg-accent mt-4 rounded'>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={350}
          className="text-accent"
        />
      </div>
    </div>
  );
};

export default DataVisualizer;
