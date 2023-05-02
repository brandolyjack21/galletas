import { useState } from "react";
import './phrase.css'



const Phrase = ({data}) => {
    const [count, setCount] = useState(0)
    function nextPhrase() {
        setCount(Math.floor(Math.random() * data.length ))
    }

    return (
        <div className="container">
            <h1>Te sugiero que tengas en cuenta este consejo</h1>
            <div>
                <span>{ data[count].phrase }</span>
                <span>autor: {data[count].author}</span>
            </div>
            <button onClick={ () => nextPhrase() }>ver otro</button>
        </div>
    );
};

export default Phrase;