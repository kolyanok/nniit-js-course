const first = document.getElementById("first");
const second = document.getElementById("second");
const result = document.getElementById("result");

function calculate()
{
	result.innerHTML = eval((parseInt(first.value, 10)||0)+operation.value+(parseInt(second.value, 10)||0));
}