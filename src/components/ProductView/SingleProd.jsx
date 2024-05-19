import { useParams } from "react-router-dom"
import { getProduct } from "../AsyncMok";
import { useEffect, useState } from "react";
import "./SingleProduct.css"

export default function SingleProduct() {
    const [product, setProduct] = useState({});
    const { prodID } = useParams();

    useEffect(() => {
        setProduct(getProduct(prodID));
    }, [])





    return <>
        <div className="ProdDetailCard">
            <h2 className="ProdDetail">{product.titulo}</h2>
            <h3 className="ProdDetail">{product.title}</h3>
            <img className="ProdDetail" src={product.img} alt={product.title} />
            <div className="TextoContenedor">
            <p className="ProdDetail SubTitulos">Descripcion: </p><p className="TextoParrafo"> {product.descripcion}</p>
            </div>
            <div className="TextoContenedor">
            <p className="ProdDetail SubTitulos">Categoria: </p><p className="TextoParrafo"> {product.categoria}</p>
            </div>
            <div className="TextoContenedor">
            <p className="ProdDetail SubTitulos">Precio: </p><p className="TextoParrafo"> ${product.precio}</p>
            </div>
            <p className="ProdDetail Id">ID:{prodID}</p>
        </div>
    </>
}