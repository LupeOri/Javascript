/* 1- Crea la siguiente figura 

     *
    **
   ***
  ****
 *****
  ****
   ***
    **
     *
    
*/

/* 2- Crea la siguiente figura 

    **
   ****
  ******
 ********
**********
 ********
  ******
   ****
    **
    
*/

/* 3- Crea la siguiente figura 

***********
 *********
  *******
   *****
    ***
     *
    
*/

/*
1-
*/

  for (let i = 1; i <= 5; i++){
    let espacio = " ".repeat(5 - i);
    let asterisco = "*".repeat(i);
    console.log(espacio + asterisco);
  }

  for (let j = 4; j >= 1; j--){
    let espacio = " ".repeat(5 - j);
    let asterisco = "*".repeat(j);
    console.log(espacio + asterisco);
  }

  /*
  2-
  */

  for (let k = 2; k <= 10; k += 2){
    let espacio = " ".repeat((10 - k)/2);
    let asterisco = "*".repeat(k);
    console.log(espacio + asterisco + espacio);
  }

  for (let l = 8; l >= 1; l -= 2){
    let espacio = " ".repeat((10 - l)/2);
    let asterisco = "*".repeat(l);
    console.log(espacio + asterisco + espacio);
  }

  /*
  3-
  */

  for (let x = 11; x >= 1; x -= 2){
    let espacio = " ".repeat((11 - x)/2);
    let asterisco = "*".repeat(x);
    console.log(espacio + asterisco + espacio);
  }
