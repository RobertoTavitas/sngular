import { Result } from "./Result.jsx";

export const Calc = ( {nValue} ) => {
	
	let n = parseInt(nValue);
	let respuesta = 0;

	if(n <= 2) {
		const existeAlerta = document.querySelector('.warning');
		if(!existeAlerta) {
			let warning = document.createElement('p');
			warning.textContent = 'n No puede ser un número menor a 3';
			warning.classList.add('warning');

			document.querySelector('.container').appendChild(warning)
			setTimeout(() => {
				warning.remove()
			}, 3000); 
		}
	}
	
	calcularResultado(n)

	function fibonacciCalc(n) {
		n = n - 2;
		let prev2 = 0;
		let prev1 = 1;
		let fibonacci = 0;

		for( let i = 2; i <= n; i++ ) {
			fibonacci = prev1 + prev2;
			prev2 = prev1;
			prev1 = fibonacci
		}

		let operacion = fibonacci * 2;

		// console.log('n: ', n);
		// console.log(`Fibonacci \n n:${n} - fib:${fibonacci} - op:${operacion}`);
		return operacion;
	}

	function triangularCalc(n) {
		n = n - 2;
		let triangular = n * (n + 1) / 2;
		let operacionTriangular = triangular * 3;

		// console.log(`Triangular \n n:${n} - tri:${triangular} - op:${operacionTriangular}`);
		return operacionTriangular;
	}

	function primoCalc(n) {
		n = n - 1;
		let auxiliar = [];
		let primos = [];
		let total = 0;

		for( let i = 2; i <= n; i++ ) {
			if(!auxiliar[i]) {
				primos.push(i);

				for( let j = i << 1; j <= n; j += i ) {
					auxiliar[j] = true
				}
			}
		}

		for(let i = 0; i < primos.length; i++) {
			total += primos[i];
		}

		let operacionPrimo = total * 7;

		// console.log(`Primo \n n:${n} - primo:${total} - op:${operacionPrimo}`);

		return operacionPrimo;
	}

	function calcularResultado(n) {
		let fibonacci = fibonacciCalc(n)
		let triangular = triangularCalc(n)
		let primo = primoCalc(n)

		let resultado = fibonacci * triangular + primo;
		respuesta = resultado;
	}

	return (
		<Result nResultado={respuesta}/>
	)
}