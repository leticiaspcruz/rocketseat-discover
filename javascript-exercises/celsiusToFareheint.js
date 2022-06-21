// Crie uma função que receba uma string em celsius ou 
// fahrenheit e faça a transformação de uma unidade para outra, 
// lembrando que C = ( F -32 ) * 5/9 e F = C * 9/5 + 32. 

const transformDegree = (degree) => {
  const celsiusExits = degree.toUpperCase().includes('C');
  const farenheintExits = degree.toUpperCase().includes('F');

  let updatedDegree = Number(degree.toUpperCase().replace("F", ""))
  let formula = (farenheint) => ( farenheint - 32 ) * 5/9;
  let degreeSign = 'C';

  if (celsiusExits) {
    let updatedDegree = Number(degree.toUpperCase().replace("C", ""))
    let formula = (celsius) => celsius * 9/5 + 32;
    let degreeSign = 'F';  
  }
  return formula(updatedDegree) + degreeSign;
};

//testing function
console.log( transformDegree('50C'));