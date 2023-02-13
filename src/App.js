import './App.css'
import Boton from './components/Boton'
import Pantalla from './components/Pantalla'
import BotonClear from './components/BotonClear'
import LogoCalculadora from './components/LogoCalculadora'
import { useState } from 'react'
import { evaluate} from 'mathjs'

function App() {

  //Funcion para ingresar numero en pantalla

  const [input , setInput] = useState('')

  const agregarinput = val => {
    setInput(input + val)
  }

//funcion para calcular el resuldato

  const calcularResultado = () => {

    if (input) {
      setInput(evaluate(input))
    } 
    else {
      alert('por favor ingrese los datos para realizar una operacion')
    }
    
}


  return (
    <div className='App'>

   <LogoCalculadora></LogoCalculadora>
        
      

      <div className='ContenedorCalculadora'>

        
        
        <Pantalla
        input={input}/>



        <div className='fila'>
          <Boton manejarClic={agregarinput}>1</Boton>
          <Boton manejarClic={agregarinput}>2</Boton>
          <Boton manejarClic={agregarinput}>3</Boton>
          <Boton manejarClic={agregarinput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarinput}>4</Boton>
          <Boton manejarClic={agregarinput}>5</Boton>
          <Boton manejarClic={agregarinput}>6</Boton>
          <Boton manejarClic={agregarinput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarinput}>7</Boton>
          <Boton manejarClic={agregarinput}>8</Boton>
          <Boton manejarClic={agregarinput}>9</Boton>
          <Boton manejarClic={agregarinput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarinput}>0</Boton>
          <Boton manejarClic={agregarinput}>.</Boton>
          <Boton manejarClic={agregarinput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => (setInput(''))}>
            Clear
          </BotonClear>
        </div>

      </div>

    </div>
  );
}

export default App;
