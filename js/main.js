let nombre = prompt("Ingrese el nombre del cliente");
let apellido = prompt("Ingrese el apellido del cliente");
let producto = 0;
let valorProducto = 0;
let sumaProducto = 0;

//let producto;

    do {
      producto = parseInt(prompt( "Bienvenidos a la tienda Coder \n" + "¿Qué productos deseas comprar " + nombre + " " + apellido +
          "? \n Seleccione los productos que desea agregar a su compra \n 1) Arroz 1lb 💲2000  \n 2) Frijol nima 1lb 💲6000  \n 3) Aceite de oliva 💲20000  \n 4) Azucar morena 1lb 💲2500  \n 5) Deseo finalizar mi compra"
      ));

      switch (parseInt(producto)) {
        case 1:
            valorProducto += 2000;
            break;
        case 2:
            valorProducto += 6000;
            break;
        case 3:
            valorProducto += 20000;
            break;
        case 4:
            valorProducto += 2500;
            break;
        case 5:
            alert("Compra finalizada");
            break;
        default:
            alert("No existe este producto en nuestra tienda");
            break;
      }
    } while (parseInt(producto) !== 5);

    

    
    function valorTotal(){
        sumaProducto += valorProducto;
        alert("El valor de su compra " + nombre + " " + apellido +" es de " + valorProducto + " Pesos" + "\nGracias por su compra");
    }
    valorTotal();
    
   
   