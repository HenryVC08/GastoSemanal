//VARIABLES Y SELECTORES 
const fromulario = document.querySelector('#agregar-gasto')
const gastoListado = document.querySelector('#gastos ul')



//EVENTOS
eventListeners();

function eventListeners(){
    document.addEventListener('DOMContentLoaded',preguntarPresupuesto)

    fromulario.addEventListener('submit', agregarGastos)
}



//CLASES 
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto)
        this.restante = Number(presupuesto)
        this.gastos = []
    }


}


class UI{
    insertarPresupuesto(cantidad){
        //Extrayendo valores
        const{presupuesto,restante} = cantidad

        //Agregar al HTML
        document.querySelector('#total').textContent = presupuesto
        document.querySelector('#restante').textContent = restante
    }

    imprimirAlerta(mensaje, tipo){
        const divMensaje =  document.createElement('div')
        divMensaje.classList.add('text-center','alert')

        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger')
        }else{
            divMensaje.classList.add('alert-success')
        }

        //Mensaje de error
        divMensaje.textContent = mensaje

        //Agregar HTML
        document.querySelector('.primario').insertBefore(divMensaje,fromulario)

        //Quitar del HTML
        setTimeout(() =>{
            divMensaje.remove()
        },1000)

    }
}

//Instancia
const ui = new UI()
let presupuesto


//FUNCIONES 
function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto')


    if(presupuestoUsuario === '' || preguntarPresupuesto === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload();
    }


    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto)


    ui.insertarPresupuesto(presupuesto)

}

//Añade gastos 
function agregarGastos(e){
    e.preventDefault()

    //Leer los datos del formulario 
    const nombre = document.querySelector('#gasto').value
    const cantidad = document.querySelector('#cantidad').value

    //Validar
    if(nombre === '' || cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error')
        return
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no validad', 'error')
        return
    }

    //Generar el objeto con un tipo gasto 

    
}



