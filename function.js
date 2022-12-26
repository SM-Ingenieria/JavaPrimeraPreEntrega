let FlagDescuento = false;
let codigo;



alert("El siguiente script calcula el precio final de un producto");
console.log("Bienvenido");

function CalcularPrecioFinal() {
    let precio = Number(prompt("Ingrese el precio de lista"));
    console.log("Precio de lista ingresado $" + precio);

    let DescuentoCodigo = prompt("Si tiene cupon de descuento coder ingreselo ahora ");
    if (DescuentoCodigo != "coder") {
        alert("no aplica ningun descuento con el codigo ingresado");
        console.log("precio $" + precio);
        FlagDescuento = 0;
        console.log("El flag de descuento esta en bajo = " + FlagDescuento);
    }

    else {
        alert("aplica 50% de descuento ");
        FlagDescuento = 1;
        precio = precio * 0.5;
        console.log("El flag de descuento esta en alto = " + FlagDescuento);
        console.log("precio con descuento $" + precio);
        alert("El precio final queda en $" + precio);
    }

    console.log("ahora ingresa el tipo de pago");

    let pago = Number(prompt("ingrese la forma de pago : 1 - Para pago en 3 cuotas con 10% de incremento, 2 - Para pago en 6 cuotas con 30% de incremento,3- Para pago en 12 cuotas con 50% de incremento,"));
    while (pago < 1 || pago > 4) {
        alert("ingrese una opcion de pago valida");
        pago = Number(prompt("ingrese la forma de pago : 1 - Para pago en 3 cuotas con 10% de incremento, 2 - Para pago en 6 cuotas con 30% de incremento,3- Para pago en 12 cuotas con 50% de incremento,"));
    }

    switch (pago) {
        case 1:
            precio = precio * 1.1;
            console.log("nuevo precio " + precio);
            alert("El precio final en 3 Cuotas es de $" + precio);
            break;
        case 2:
            precio = precio * 1.3;
            console.log("nuevo precio " + precio);
            alert("El precio final en 6 Cuotas es de $" + precio);
            break;
        case 3:
            precio = precio * 1.5;
            console.log("nuevo precio " + precio);
            alert("El precio final en 12 Cuotas es de $" + precio);
            break;
        case 4:
            if (FlagDescuento == 1) {
                alert("El precio final tiene aplicado un descuento del 50%, por lo que abona $" + precio);

            }
            else {
                precio = precio * 0.8;
                console.log("nuevo precio " + precio);
                alert("El precio final en efectivo con descuento es de $" + precio);
            }
            break;
        default:
            alert("ingrese opcion valida");
            break;

    }
    console.log("precio final $" + precio);


}
CalcularPrecioFinal();


