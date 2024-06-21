"use client"
import DataVisualizer from '@/components/DataVisualizer'
import Data1 from '../../database/fonte de dados 1.json'
import Data2 from '../../database/fonte de dados 2.json'
import Data3 from '../../database/fonte de dados 3.json'
import Data4 from '../../database/fonte de dados 4.json'
import Data5 from '../../database/fonte de dados 5.json'
import { useMemo, useState } from 'react';

function DataSelector() {
    const possibleDataSet = useMemo(() => {
        return [Data1, Data2, Data3, Data4, Data5]
    }, [])
    const [selecteId, setSelectedId] = useState(0)

    const selectedData = useMemo(() => {
        return possibleDataSet[selecteId]
    }, [possibleDataSet, selecteId])

    return (
        <div>
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">Selecione a fonte de dados</h1>
                <select onChange={(e) => setSelectedId(parseInt(e.target.value))} value={selecteId} 
                className='bg-accent-1 border border-accent-2 p-2 rounded-md w-1/4'
                    >
                    {possibleDataSet.map((data, index) => (
                        <option key={index} value={index}>
                            Fonte de dados {index + 1}
                        </option>
                    ))}
                </select>
            </div>
            <DataVisualizer data={selectedData} />
        </div>
    );
}

export default DataSelector;