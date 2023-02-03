function tallestFriend ( height ) {

    let tallest = height[0];

    for (var i = 0; i<height.length; i++){

        if (tallest < height[i]){

            tallest = height[i]; 
        }


    }
   console.log(tallest);

    }

    tallestFriend([120, 160, 172, 196, 190]);