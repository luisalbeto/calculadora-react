import './App.css'
import calculadoralogo from './images/calculadoralogo.png'
import Boton from './components/Boton'
import Pantalla from './components/Pantalla'
import BotonClear from './components/BotonClear'
import { useState } from 'react'
import { evaluate } from 'mathjs'

function App() {

  const [input , setInput] = useState('')

  const agregarinput = val => {
    setInput(input + val)
  }
  const calcularResultado = () => (
    setInput(evaluate(input))
  )


  return (
    <div className='App'>

      <div className='ContenedorLogoCalculadora'>
        <img 
          className='LogoCalculadora'
          src={calculadoralogo}
          alt='logocalculadora'/>
      </div>

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
