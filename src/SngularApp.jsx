import { Form } from "./components/Form"

export const SngularApp = () => {

	return (
		<>
			<div className="container">
				<h1 id="title">Sngular Test</h1>
				<p id="serie">serie(n) = 2fibonacci(n-2) * 3triangular(n-2) + 7primo(n-1)</p>
				<Form />
			</div>
		</>
	)
}
