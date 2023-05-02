
import './App.css'
import phrases from './phrases.json'
import Phrase from './Phrase'

function App() {

  return (
    <div className='app'>
     <Phrase 
     data={phrases}/>
    </div>
  )
}

export default App
