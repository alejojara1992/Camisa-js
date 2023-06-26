function calcularCompra(){
    let cantidad = parseInt(document.getElementById("cantidadInput").value)
    let precio = parseInt(document.getElementById("valorInput").value)
    let total = cantidad * precio
    let totalCompra
    if (cantidad >= 3) {
        totalCompra = total * 0.8       
    }
    else if (cantidad > 0){
        totalCompra = total * 0.9
    }
    else{
        totalCompra = String('ingrese un valor de camisas valido')
        total = String('0')
    }
    let totalResultadoElement = document.getElementById("totalResultado")
    totalResultadoElement.textContent = "El total de la compra de la cantidad de camisas es: " + total

    totalConDescuento = document.getElementById("totalCompraResultado")
    totalConDescuento.textContent = "El total del descuento fue: " + totalCompra
}