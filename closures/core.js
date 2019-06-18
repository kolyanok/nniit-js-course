// Напишите функцию, суммирующую два числа, так, что sum(a)(b) == a + b (задание с очень жирной звездочкой на поразбираться - суммируйте любое количество чисел)
function sum(a) {
  return function subSum(value){
    a+=value;
    
    subSum.valueOf=function(){
      return a;
    }

    return subSum;
  }
}

// Напишите замыкание, которое будет принимать число и считать среднее арифметическое от всех переданных ранее чисел (если задание не до конца понятно - подглядите тесты :) )
function average() {
  let s=0, c=0;

  function avg(value){
  	s+=value;
    return s/++c;
  }

  return avg;	
	
}

module.exports = {
  sum,
  average
};
