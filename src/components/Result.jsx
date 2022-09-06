
export const Result = ( {nResultado} ) => {
	
	if (isNaN(nResultado)) {
		nResultado = 0;
	}

	return (
		<p id="result">El Resultado es: {nResultado}</p>
	)
}
