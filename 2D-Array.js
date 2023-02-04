

function heightScores(scores){

    let heightRun = scores[0][1];
    let heightRunner = scores[0][0];

    for(let i = 1; i< scores.length; i++){
        if(heightRun < scores[i][1]){

            heightRun = scores [i][1];
            heightRunner = scores [i][0];
        }
    }
    console.log(heightRunner);

}
heightScores([["Ashraful",101],["tammim",84], ["Shakib",99],["Mushfiq",102]])