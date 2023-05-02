
import './App.css'
import phrases from './phrases.json'
import Phrase from './Phrase'

function App() {

  return (
    <>
     <Phrase 
     data={phrases}/>
    </>
  )
}

export default App
