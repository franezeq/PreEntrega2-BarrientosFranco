import { useRef } from "react";
import { useState } from "react";
import "./ItemCount.css"

export default function ItemCount() {
    const [cont, setCont] = useState(0);
    const clicks = useRef(0);


const handleInc = () => {
    setCont(cont + 1);
    clicks.current++;

};

const handleDec = () =>{
    setCont(cont - 1);
    clicks.current++;
}

return(
    <>
    <h4 className="TituloContador">Agregar al carro</h4>
    <section className="SeccionContador">
        <button onClick={handleDec} className="BotonContador">-</button>
        <p className="TextoContador">{cont}</p>
        <button onClick={handleInc} className="BotonContador">+</button>
    </section>
    <button className="BtnAgregar">Agregar</button>

    
    </>
)
}