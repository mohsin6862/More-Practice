function findOddSum(arrOfNumbers){

    let sum = 0;

    for(var i = 0; i< arrOfNumbers.length; i++){

        if(arrOfNumbers[i] % 2 != 0){

            sum = sum + arrOfNumbers[i];

        }
    }
      console.log(sum);
    }

    findOddSum([14, 12, 17,22, 19, 77, 66, 8]);