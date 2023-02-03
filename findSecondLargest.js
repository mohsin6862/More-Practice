function secondLargest ( numbers ) {

    

    numbers.sort(((a, b) => b - a));
    
    const larger = numbers[1];

    console.log(larger);


}

secondLargest([10, 55, 14, 88, 22, 66, 47, 75, 87]);