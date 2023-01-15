import React from "react";
import "../Calculadora.css";

const BotaoCalculador = (props) =>{
    return <button className={props.className} onClick={() => props.onClick(props.value)}>{props.value}</button>
    
}

export default BotaoCalculador;