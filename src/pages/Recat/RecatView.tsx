import type { HistoricoTypes } from "../Historico/HistoricoTypes"
type dataProp={
  data : HistoricoTypes[]
}

export default function RecatView({data}: dataProp) {

  return (
    <div>      
      <h2 className='font-black text-4xl'>Solicitar recat</h2>

      <div className='space-y-3 mt-10'>
        {/* Aquí puedes mapear los datos */}
        {data.map((item, index) => (
          <div key={index}>{item.manifiesto}</div>          
        ))}
      </div>
    </div>
  )
}
