function checkTriangle(side1, side2, side3){
    const ture = "yes";
    const notTrue ="No";

    if (side1 == side2 && side1 != side3){
        console.log(ture);
    }
    else if (side1 == side3 && side1 != side2){
        console.log(ture);
    }
    else if (side2 == side3 && side1 != side2){
        console.log(ture);
    }
    else{
        console.log(notTrue);

    }



    }
    

    checkTriangle(6,5,6)