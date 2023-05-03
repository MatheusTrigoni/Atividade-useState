import { useState } from 'react'

export function AtualizaPalavra() {
    const [palavra, setPalavra] = useState("abacate")

    function handleLetra(option) {
        if (option === 1)
            return setPalavra(palavra + palavra[palavra.length - 1])
        else if (option === 2 && palavra != "abacate")
            return setPalavra(palavra.substring(0, palavra.length - 1))
        else if (option === 3)
            return setPalavra("abacate")
        return alert("A palavra já está em sua forma original")
    }

    return (
        <section>
            <header>
                <h1>Palavra: {palavra}</h1>
            </header>
            <button type="button" onClick={() => handleLetra(1)}>Incrementar</button>
            <button type="button" onClick={() => handleLetra(2)}>Decrementar</button>
            <button type="button" onClick={() => handleLetra(3)}>Resetar</button>
        </section>
    )
}