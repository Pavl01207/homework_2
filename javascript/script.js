//Задача 0.1
let a = parseFloat(prompt('a=', '0'))
let b = parseFloat(prompt('b=', '0'))
document.write(`<h3>Задача 0.1: <span>${a + 12 + b}</span></h3>`)
//Задача 0.2
document.write(`<h3>Задача 0.2: <span>${Math.sqrt((a + b) / 2 * a)}</span></h3>`)
//Задача 0.3
let c = parseFloat(prompt('c=', '0'))
document.write(`<h3>Задача 0.3: <span>${Math.cbrt((a + b) * c).toFixed(2)}</span></h3>`)
//Задача 0.4
document.write(`<h3>Задача 0.4: <span>${Math.sin(s4 = a / - b).toFixed(3)}</span></h3>`)

//Задача 1
let numberOne = parseInt(prompt('Перше значення', '0'))
let numberTwo = parseInt(prompt('Друге значення', '0'))
document.write(`<h3>Задача 1</h3>
<table>
	<tr>
		<td>a+b</td>
		<td>a*b</td>
		<td>a/b</td>
	</tr>
	<tr>
	<td>${numberOne + numberTwo}</td>
	<td>${numberOne * numberTwo}</td>
	<td>${numberOne / numberTwo}</td>
	</tr>
</table>`)
//Задача 2