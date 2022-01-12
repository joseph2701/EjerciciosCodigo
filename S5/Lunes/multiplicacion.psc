Algoritmo Tablas		
	Hacer
		operacion <-""
		Escribir "*********************************************"
		Escribir "Se realizara la multiplicación de dos números"
		Escribir "*********************************************"
		Escribir "Ingrese numero 1: "
		Leer a
		Escribir "Ingrese numero 2: "
		Leer b
		Escribir "-------------------------"
		Escribir "Resutado: " multiplicacion(a,b)
		Escribir "*********************************************"
		Escribir "**********Para Continuar presiona (c)************"
		Escribir "*********************************************"
		Leer operacion
	Mientras que (operacion = "c") 	
FinAlgoritmo

funcion multiplicacion_retorno = multiplicacion(a,b)
	multiplicacion_retorno = a * b
FinFuncion
