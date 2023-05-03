import { useState } from "react"

export function AtualizaNumero() {
    const [numero, setNumero] = useState(10)

    function handleIncrementoDecremento(option) {
        if (option === 1)
            return setNumero(numero + 5)
        else if (option === 2)
            return setNumero(numero - 2)
        return setNumero(10)
    }

    return (
        <section>
            <header>
                <h1>Número: {numero}</h1>
            </header>
            <button type="button" onClick={() => handleIncrementoDecremento(1)}>Incrementar</button>
            <button type="button" onClick={() => handleIncrementoDecremento(2)}>Decrementar</button>
            <button type="button" onClick={() => handleIncrementoDecremento(3)}>Resetar</button>
        </section>
    )
}