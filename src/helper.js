//Diferencia de años
export function obtenerDiferenciayear(year){
    return new Date().getFullYear() - year;
}

//Calcula según marca
export function calcularMarca(marca){
    let incremento;
    switch(marca)
    {
        case('europeo'):
            incremento = 1.30;
            break;
        case('americano'):
            incremento = 1.15;
            break;
        case('asiatico'):
            incremento = 1.05;
            break;
        default:
            break;
    }
    return incremento;
}

//Calcular plan
export function obtenerPlan(plan){
    return (plan ==='basico') ? 1.20 : 1.50;
}