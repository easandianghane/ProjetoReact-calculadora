import React from "react";
import BotaoCalculador from "./BotaoCalculador";
import "../Calculadora.css";

const Calculador = (value) => {
    const [calc, setCalc] = React.useState({
        current: "0",
        total: "0",
        isInitial: true,
        preOp: ""
    });

    function handleNumber(value) {
        let newValue = value;
        if (!calc.isInitial) {
            newValue = calc.current + value;
        }

        setCalc({
            current: newValue,
            total: calc.total,
            isInitial: false,
            preOp: calc.preOp
        });
    }

    function renderDisplay() {
        return calc.current;
    }

    function fazerCalculo() {
        let total = parseInt(calc.total);

        switch (calc.preOp) {
            case "+":
                total += parseInt(calc.current);
                break;
            case "-":
                total -= parseInt(calc.current);
                break;
            case "*":
                total *= parseInt(calc.current);
                break;
            case "/":
                total /= parseInt(calc.current);
                break;
            default:
                total = parseInt(calc.current);
                break
        }
        return total;
    }

    function handleOperator(value) {
        const total = fazerCalculo();
        setCalc({
            current: total.toString(),
            total: total.toString(),
            isInitial: true,
            preOp: value
        })
    }

    function limpar() {
        setCalc({
            current: "0",
            total: "0",
            isInitial: true,
            preOp: ""
        });
    }

    return (
        <div className="calculador">
            <div className="display">{renderDisplay()}</div>
            <BotaoCalculador value="7" onClick={handleNumber} />
            <BotaoCalculador value='8' onClick={handleNumber} />
            <BotaoCalculador value='9' onClick={handleNumber} />
            <BotaoCalculador className="operador" value='/' onClick={handleOperator} />

            <BotaoCalculador value='4' onClick={handleNumber} />
            <BotaoCalculador value='5' onClick={handleNumber} />
            <BotaoCalculador value='6' onClick={handleNumber} />
            <BotaoCalculador className="operador" value='*' onClick={handleOperator} />

            <BotaoCalculador value='1' onClick={handleNumber} />
            <BotaoCalculador value='2' onClick={handleNumber} />
            <BotaoCalculador value='3' onClick={handleNumber} />
            <BotaoCalculador className="operador" value='-' onClick={handleOperator} />

            <BotaoCalculador value='C' onClick={limpar} />
            <BotaoCalculador value='0' onClick={handleNumber} />
            <BotaoCalculador value='=' onClick={handleOperator}/>
            <BotaoCalculador className="operador" value='+' onClick={handleOperator} />


        </div>
    )
}

export default Calculador;