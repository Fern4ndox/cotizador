import React from 'react';
import styled from '@emotion/styled';
import {primeraMayuscula} from '../helper';
import PropTypes from 'prop-types';

const Resumen  = ({datos}) => {    
    const ContenerdorResumen = styled.div
    `
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
    ` 
    //Extraer Datos

    const {marca, year, plan} = datos;

    if(marca === '' || year === '' || plan === '') return null;

    return (  
        <ContenerdorResumen>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca:{primeraMayuscula(marca)} </li>
                <li>Plan:{primeraMayuscula(plan)}</li>
                <li>Año:{primeraMayuscula(year)}</li>
            </ul>
        </ContenerdorResumen>
    );
}
Resumen.propTypes={
    datos: PropTypes.object.isRequired
}
export default Resumen;