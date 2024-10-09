import { useEffect, useMemo, useState } from "react"
import type { HistoricoTypes } from "./HistoricoTypes"
import { GridRowSelectionModel } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import * as XLSX from 'xlsx'

export const useHistorico= () =>{

    const[rows,setRows] = useState<HistoricoTypes[]>([]);
    const[filter, setFilter]= useState<string>('');//estado para filtro
    const[rowSelect, setRowSelect] = useState<GridRowSelectionModel>([]);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const navigate = useNavigate();


    const exportExcel =() =>{
        const data = rows.map((row)=>({
            'Numero' : row.numeroManifiesto,
            'Manifiesto': row.manifiesto,
            'Estatus': row.status,
            'Bitacora': row.bitacora,

        }));
        const ws = XLSX.utils.json_to_sheet(data)
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Historico')

        XLSX.writeFile(wb,'Historico.xlsx');
    }

    const exampleRows: (HistoricoTypes & {})[] = [
        { id: 1, numeroManifiesto: 1, manifiesto: 'Manifiesto ', status: 'En bitácora', bitacora: 'Bitácora 1', fecha:new Date("2024-10-07") },
        { id: 2, numeroManifiesto: 2, manifiesto: 'Manifiesto ', status: 'Incompleto', bitacora: 'Bitácora 2', fecha:new Date("2024-10-10") },
        { id: 3, numeroManifiesto: 3, manifiesto: 'Manifiesto ', status: 'Pendiente Recat', bitacora: 'Bitácora ', fecha:new Date("2024-10-17") },
        { id: 4, numeroManifiesto: 4, manifiesto: 'Manifiesto ', status: 'En bitácora', bitacora: 'Bitácora 1', fecha:new Date("2024-10-17") },
        { id: 5, numeroManifiesto: 5, manifiesto: 'Manifiesto ', status: 'Incompleto', bitacora: 'Bitácora 2', fecha:new Date("2024-10-07") },
        { id: 6, numeroManifiesto: 6, manifiesto: 'Manifiesto ', status: 'Pendiente Recat', bitacora: 'Bitácora 4', fecha:new Date("2024-10-07") },
        { id: 7, numeroManifiesto: 7, manifiesto: 'Manifiesto ', status: 'En bitácora', bitacora: 'Bitácora 1', fecha:new Date("2024-10-10") },
        { id: 8, numeroManifiesto: 8, manifiesto: 'Manifiesto ', status: 'Incompleto', bitacora: 'Bitácora 2', fecha:new Date("2024-10-07") },
        { id: 9, numeroManifiesto: 9, manifiesto: 'Manifiesto ', status: 'Pendiente Recat', bitacora: 'Bitácora 3', fecha:new Date("2024-10-17") },
        { id: 10, numeroManifiesto:10, manifiesto: 'Manifiesto ', status: 'En bitácora', bitacora: 'Bitácora 1', fecha:new Date("2024-10-07") },
        { id: 11, numeroManifiesto:11, manifiesto: 'Manifiesto ', status: 'Incompleto', bitacora: 'Bitácora 2', fecha:new Date("2024-10-11") },
        { id: 12, numeroManifiesto:12, manifiesto: 'Manifiesto ', status: 'Pendiente Recat', bitacora: 'Bitácora ', fecha:new Date("2024-10-11") },
        { id: 13, numeroManifiesto:13, manifiesto: 'Manifiesto ', status: 'En bitácora', bitacora: 'Bitácora 1', fecha:new Date("2024-10-07") },
        { id: 14, numeroManifiesto:14, manifiesto: 'Manifiesto ', status: 'Pendiente Recat', bitacora: 'Bitácora 6', fecha:new Date("2024-10-11") },
        { id: 15, numeroManifiesto:15, manifiesto: 'Manifiesto ', status: 'Pendiente Recat', bitacora: 'Bitácora 3', fecha:new Date("2024-10-11") },
        { id: 16, numeroManifiesto:16, manifiesto: 'Manifiesto ', status: 'En bitácora', bitacora: 'Bitácora 10', fecha:new Date("2024-10-11") },
        { id: 17, numeroManifiesto:17, manifiesto: 'Manifiesto ', status: 'Pendiente Recat', bitacora: 'Bitácora 9', fecha:new Date("2024-10-1") },
        { id: 18, numeroManifiesto:18, manifiesto: 'Manifiesto ', status: 'Pendiente Recat', bitacora: 'Bitácora 9', fecha:new Date("2024-10-11") },
      ];
    
      useEffect(()=>{
        setRows(exampleRows)
      },[]);

      const filteredRows = useMemo(() => {
        return rows.filter((row) => {
          // Filtra por estado
          if (!filter && !startDate && !endDate) return true;
      
          const rowDate = row.fecha ? new Date(row.fecha) : null;
      
          const isWithinRange =
            (!startDate || (rowDate && rowDate >= startDate)) &&
            (!endDate || (rowDate && rowDate <= endDate));
      
          return (!filter || row.status === filter) && isWithinRange; // Cambia esto para incluir el filtro de estado
        });
      }, [rows, filter, startDate, endDate]);
      

      const isCheckboxEnabled = filter === 'Pendiente Recat';

      const handleSendSelected = () => {
        const selectedRows = rows.filter((row) => rowSelect.includes(row.id));
        navigate('/recat',{state: {selectedRows}})
      }   
    return{
       rows,
       filter,
       setFilter,
       rowSelect,
       setRowSelect,
       navigate,
       exportExcel,
       exampleRows,
       filteredRows,
       isCheckboxEnabled,
       handleSendSelected,
       startDate,
       setStartDate,
       endDate,
       setEndDate
    }
}