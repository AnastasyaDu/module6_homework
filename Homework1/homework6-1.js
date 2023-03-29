let arry = [8, 3, null, 2, 7, 6, 0, '', NaN];
let zero =0;
let even = 0;
let odd = 0;  
function evenOddElement(){
    for (let i = 0; i < arry.length; i++){

        if (typeof (arry[i]) === "number" && !isNaN(arry[i])){

	       if (arry[i] === 0) {
		 zero += 1;
	     } else if (arry[i] % 2 === 0) {
		  even += 1;
	     }else if (arry[i] % 2 !== 0) {
		  odd += 1;
         }
	    }
    }

  console.log(arry);
  console.log(`В массиве нолей: ${zero} , чётных: ${even} , нечётных: ${odd}; `);
}
evenOddElement();