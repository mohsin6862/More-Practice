function findingSmallest ( numbers ) {
   
   
    numbers.sort((a, b) => a - b);
    let smallest = numbers[0];
    console.log(smallest);
    
    }

    findingSmallest([12, 22, 14, 5, 9, 44,2, 3]);