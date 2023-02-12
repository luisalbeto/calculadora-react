import React from 'react'
import '../stylesheets/Boton.css'

function Boton (props) {
const esOperador = valor => {
  return isNaN(valor) && (valor !== '.') && (valor !== '=')
}


  return(
    <div
    className={`ContenedorBoton ${esOperador(props.children) ? 'Operador' : ''}`.trimEnd()}
    onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  )
}
export default Boton