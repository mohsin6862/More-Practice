function findLeapYear(arrOfYears){

        var newArr =[];
    for(var i = 0; i< arrOfYears.length; i++){

        if((arrOfYears[i] % 4 == 0 && arrOfYears[i] % 100 != 0) || arrOfYears[i] % 400 == 0){

            newArr.push(arrOfYears[i]);

            

        }
    

    }
    console.log(newArr);

    }

    findLeapYear([2023,2024,2025,2028,2030]);