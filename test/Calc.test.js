
describe('Valores de n del 1 al 10', () => {

    let respuesta;
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
		return operacion;
	}

	function triangularCalc(n) {
		n = n - 2;
		let triangular = n * (n + 1) / 2;
		let operacionTriangular = triangular * 3;
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
		return operacionPrimo;
	}

	function calcularResultado(n) {
		let fibonacci = fibonacciCalc(n)
		let triangular = triangularCalc(n)
		let primo = primoCalc(n)
		let resultado = fibonacci * triangular + primo;
		respuesta = resultado;
        return resultado;
	}
    
    test('cuando n=1 resultado=0', () => {
        expect(calcularResultado(1)).toBe(0)
    })

    test('cuando n=2 resultado=0', () => {
        expect(calcularResultado(2)).toBe(0)
    })

    test('cuando n=3 resultado=14', () => {
        expect(calcularResultado(3)).toBe(14)
    })

    test('cuando n=4 resultado=53', () => {
        expect(calcularResultado(4)).toBe(53)
    })

    test('cuando n=5 resultado=107', () => {
        expect(calcularResultado(5)).toBe(107)
    })

    test('cuando n=6 resultado=250', () => {
        expect(calcularResultado(6)).toBe(250)
    })

    test('cuando n=7 resultado=520', () => {
        expect(calcularResultado(7)).toBe(520)
    })

    test('cuando n=8 resultado=1127', () => {
        expect(calcularResultado(8)).toBe(1127)
    })

    test('cuando n=9 resultado=2303', () => {
        expect(calcularResultado(9)).toBe(2303)
    })

    test('cuando n=10 resultado=4655', () => {
        expect(calcularResultado(10)).toBe(4655)
    })

    test('Respuesta es typeof Number', () => {
        expect(typeof respuesta).toBe('number')
    })
  
})