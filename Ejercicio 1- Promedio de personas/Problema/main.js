//Definir variables
function obtenerPrecioVenta()
{
	var codigo, costoProduccion,
		materiaPrima, gastosFabricacion, manoDeObra,
		precioVenta;

	codigo = prompt("Por favor, ingresar el código de producto");
	materiaPrima = prompt("Por favor, ingresar el valor de la materia prima usada");

	materiaPrima = parseFloat(materiaPrima);
	codigo = parseInt(codigo);

	if(codigo == 0 || codigo > 6)
	{
		alert("Este código de producto no existe");
	}

	manoDeObra = obtenerValorManoDeObra(codigo, materiaPrima);
	gastosFabricacion = obtenerGastosDeFabricacion(codigo, materiaPrima);

	//Calcular costo de producción
	costoProduccion = materiaPrima + manoDeObra + gastosFabricacion;
	precioVenta = costoProduccion + (costoProduccion * 0.45);

	var htmlResultado = document.getElementById('resultado');
	htmlResultado.innerHTML = precioVenta;

	return;
}












//Conseguir valor de mano de obra
//function getWorkForce()
function obtenerValorManoDeObra(_codigo, _materiaPrima)
{
	var resultadoManoDeObra;
	var porcentaje;

	switch (_codigo)
	{
		case 3 || 4:
			porcentaje = 0.75;
			break;
		case 1:
		case 5:
			porcentaje = 0.80;
			break;
		case 2:
		case 6:
			porcentaje = 0.85;
			break;
		default:
			return 0;
	}

	resultadoManoDeObra = _materiaPrima * porcentaje;

	return resultadoManoDeObra;
}


//Conseguir gastos de fabricación
function obtenerGastosDeFabricacion(_codigo, _materiaPrima)
{
	var resultadoGastosFabricacion;
	if(_codigo == 2 || _codigo == 5)
	{
		resultadoGastosFabricacion = _materiaPrima * 0.30;
	}

	if(_codigo == 3 || _codigo == 6)
	{
		resultadoGastosFabricacion = _materiaPrima * 0.35;
	}

	if(_codigo == 1 || _codigo == 4)
	{
		resultadoGastosFabricacion = _materiaPrima * 0.28;
	}

	return resultadoGastosFabricacion;
}













