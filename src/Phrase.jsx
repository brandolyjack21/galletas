import { useState } from "react";



const Phrase = (phrases) => {
    const [count, setCount] = useState(0)
    function nextPhrase() {
        setCount(Math.floor(Math.random() * prop.length ))
    }

    return (
        <div>
            <h1>Te sugiero que tengas en cuenta este consejo</h1>
            <div>
                <span>{ phrases[count].phrase }</span>
            </div>
            <button onClick={ () => nextPhrase() }>ver otro</button>
        </div>
    );
};

export default Phrase;