import React from 'react'
import calculadoralogo from '../images/calculadoralogo.png'
import '../stylesheets/LogoCalculadora.css'

function LogoCalculadora (props){

    return(
      <div className='ContenedorLogoCalculadora'>
        <img 
            className='LogoCalculadora'
            src={ calculadoralogo }
            alt='logocalculadora'/>
      </div>
      
    )

}




export default LogoCalculadora