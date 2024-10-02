import { SetStateAction, useState } from "react"
import type { ManifestForm } from "./ManifiestoTypes"
import * as XLSX from 'xlsx'
import { SelectChangeEvent } from "@mui/material";
import { residuosT } from "../../components/Destinos/residuosTypes";

export const useManifiesto = () =>{

    const [dialogOpen, setDialogOpen] = useState(false);
    const [openFab, setOpenFab] = useState(false);

    const [formData, setFormData] = useState<ManifestForm>({
        fechaRecoleccion: '',
        numeroManifiesto: 0,
        razonSocial: '',
        municipio: '',
        estado: '',
        transporte: '',
        operador: '',
        fechaEntrega: '',
        numeroPlacas: '',
        recat: '',
        fechaEntregaScursal: '',
        observaciones: ''
      });
    
      const [residuos, setResiduos] = useState<residuosT>({
        GP01: 0,
        GP02: 0,
        GP03: 0,
        GP04: 0,
        GP05: 0,
        GP06: 0,
        GP07: 0
      });
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
          ...(name === 'fechaEntrega' && { fechaRecoleccion: value }), // Sincroniza las fechas
          ...(name === 'razonSocial'&& {municipio:value}),
        }));
    };
    
    // Cambia específico para el select
    const handleSelectChange = (e: SelectChangeEvent<string>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        ...(name === 'razonSocial' && { estado: value === "razonSocial1" ? "Puebla" : "" })
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setDialogOpen(true);
        console.log(formData);
      };
    
      const handleDialogClose = (newResiduos: SetStateAction<residuosT>) => {
        setDialogOpen(false);
        setResiduos(newResiduos); // Almacena los residuos que vienen del modal
      };

    const handleExport = () =>{
        const data = {
            ...formData,
            ...residuos
        };
        const ws = XLSX.utils.json_to_sheet([data]);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb,ws,'Bitacora');

        //Exportar archivo
        XLSX.writeFile(wb,'Manifiesto.xlsx');
    };

    const buttonFab = () =>{
        setOpenFab(!openFab);
    };


    //para poder hacer uso de los hooks en la vista
    return{
        dialogOpen,
        openFab,
        formData,
        residuos,
        handleChange,
        handleSelectChange,
        handleSubmit,
        handleDialogClose,
        handleExport,
        buttonFab
    }
}