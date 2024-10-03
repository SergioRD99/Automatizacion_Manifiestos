import { useEffect, useMemo, useState } from "react"
import type { HistoricoTypes } from "./HistoricoTypes"
import { GridRowSelectionModel } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import * as XLSX from 'xlsx'

export const useHistorico= () =>{

    const[rows,setRows] = useState<HistoricoTypes[]>([]);
    const[filter, setFilter]= useState<string>('');//estado para filtro
    const[rowSelect, setRowSelect] = useState<GridRowSelectionModel>([]);
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

    }

    const exampleRows: (HistoricoTypes & {})[] = [
        { id: 1, numeroManifiesto: 1, manifiesto: 'Manifiesto ', status: 'En bitácora', bitacora: 'Bitácora 1' },
        { id: 2, numeroManifiesto: 2, manifiesto: 'Manifiesto ', status: 'Incompleto', bitacora: 'Bitácora 2' },
        { id: 3, numeroManifiesto: 3, manifiesto: 'Manifiesto ', status: 'Pendiente Recat', bitacora: 'Bitácora ' },
        { id: 4, numeroManifiesto: 4, manifiesto: 'Manifiesto ', status: 'En bitácora', bitacora: 'Bitácora 1' },
        { id: 5, numeroManifiesto: 5, manifiesto: 'Manifiesto ', status: 'Incompleto', bitacora: 'Bitácora 2' },
        { id: 6, numeroManifiesto: 6, manifiesto: 'Manifiesto ', status: 'Pendiente Recat', bitacora: 'Bitácora 4' },
        { id: 7, numeroManifiesto: 7, manifiesto: 'Manifiesto ', status: 'En bitácora', bitacora: 'Bitácora 1' },
        { id: 8, numeroManifiesto: 8, manifiesto: 'Manifiesto ', status: 'Incompleto', bitacora: 'Bitácora 2' },
        { id: 9, numeroManifiesto: 9, manifiesto: 'Manifiesto ', status: 'Pendiente Recat', bitacora: 'Bitácora 3' },
        { id: 10, numeroManifiesto:10, manifiesto: 'Manifiesto ', status: 'En bitácora', bitacora: 'Bitácora 1' },
        { id: 11, numeroManifiesto:11, manifiesto: 'Manifiesto ', status: 'Incompleto', bitacora: 'Bitácora 2' },
        { id: 12, numeroManifiesto:12, manifiesto: 'Manifiesto ', status: 'Pendiente Recat', bitacora: 'Bitácora ' },
        { id: 13, numeroManifiesto:13, manifiesto: 'Manifiesto ', status: 'En bitácora', bitacora: 'Bitácora 1' },
        { id: 14, numeroManifiesto:14, manifiesto: 'Manifiesto ', status: 'Pendiente Recat', bitacora: 'Bitácora 6' },
        { id: 15, numeroManifiesto:15, manifiesto: 'Manifiesto ', status: 'Pendiente Recat', bitacora: 'Bitácora 3' },
        { id: 16, numeroManifiesto:16, manifiesto: 'Manifiesto ', status: 'En bitácora', bitacora: 'Bitácora 10' },
        { id: 17, numeroManifiesto:17, manifiesto: 'Manifiesto ', status: 'Pendiente Recat', bitacora: 'Bitácora 9' },
        { id: 18, numeroManifiesto:18, manifiesto: 'Manifiesto ', status: 'Pendiente Recat', bitacora: 'Bitácora 9' },
      ];
    
      useEffect(()=>{
        setRows(exampleRows)
      },[]);

      const filteredRows = useMemo(()=>{
        return rows.filter((row) =>{
            if(!filter) return true;
            return row.status === filter;
        })
      }, [rows, filter]);

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
       handleSendSelected
    }
}