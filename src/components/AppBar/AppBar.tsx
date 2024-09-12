import MenuComponent from "../Menu/MenuComponent"
import ciosa from '/src/assets/Ciosa_AutoTodo.png';


export default function AppBar() {
  return (
    <>
        <header className="py-5 flex items-center gap-11" style={{backgroundColor:'#002D59'}}>
            <MenuComponent/>    
            <img src={ciosa} className="max-w-60 h-auto"/>   
        </header>
    </>
  )
}
