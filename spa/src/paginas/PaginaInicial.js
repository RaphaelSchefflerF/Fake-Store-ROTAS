import React from "react";
import Produto from "../componentes/Produto";
import "./style.css";
import Menu from "../componentes/Menu";
export default function PaginaInicial({}) {
    return (
        <div className="back">
        <Menu />
        <Produto/>
        </div>
    );
}
