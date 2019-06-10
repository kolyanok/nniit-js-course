//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
	return n===(n^0);
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
	return [2,4,6,8,10,12,14,16,18,20]; //думая над тем, рационально ли применять цикл для этой задачи, я задумался,
	// зачем вообще нужна функция, которая возвращает массив четных чисел от 2 до 20 включительно, и потерял всю суть ¯\_(ツ)_/¯
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
	let sum=0;
	for (let i=1; i<=n; i++)
		sum+=i;
	return sum;
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {
	if (!n)
		return 0;
	return n+recSumTo(n-1);
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
	let fact=1;
	for (let i=1; i<=n; i++)
		fact*=i;
	return fact;
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
	if (!n)
		return false;
	
	 return (Math.ceil(Math.log2(n))===Math.floor(Math.log2(n)));
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
	 	if(n==0)
	 		return 0;
    let prev=0, next=1;
    for (let i=1; i<n; i++)
    {
        let tmp=next+prev;
        prev=next;
        next=tmp;
    }
    return next;
}

module.exports = {
    isInteger, even, sumTo, recSumTo, factorial, isBinary, fibonacci
}
