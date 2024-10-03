import { useState } from "react";
import { useLocation } from "react-router-dom";

type RowData = {
    id: number;
    manifiesto: string;
    campo1?: string;
    campo2?: string;
  };
  

export const useRecat = () =>{

    const location = useLocation();
    const { selectedRows = [] }: { selectedRows: RowData[] } = location.state || { selectedRows: [] };
    const [rows, setRows] = useState<RowData[]>(selectedRows);


    // Manejar el cambio de los valores en los TextFields
    const handleInputChange = (id: number, field: keyof RowData, value: string) => {
        setRows((prevRows) =>
        prevRows.map((row) =>
            row.id === id ? { ...row, [field]: value } : row
            )
        );
    };

    //Eliminar item 
    const deleteRow = (id: number) => {
        setRows((prevRows) =>
        prevRows.filter((row) => row.id !== id)
        );
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Enviado')      
    };
    return{
       rows,
       handleInputChange,
       deleteRow,
       handleSubmit
    }
}