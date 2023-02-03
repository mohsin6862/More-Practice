function JimOrDelaOrChinku ( marksOfJim, marksOfDela, marksOfChinku ) {
    
    if(marksOfJim > marksOfDela && marksOfJim > marksOfChinku){
        console.log("Jim");
    }
    else if( marksOfDela > marksOfJim && marksOfDela > marksOfChinku){
        console.log("Dela");
    }
    else{
        console.log("Chinku");
    }


    }
    JimOrDelaOrChinku(55, 89, 101);