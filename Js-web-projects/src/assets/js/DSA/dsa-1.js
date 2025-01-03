console.log("Question ==> Given coordinates of a point (x,y) in 2D plane, find in which quadrant does this point lie.");
function findQuadarnt (x, y){
    // if(x > 0 && y >0){
    //     return "Qudarant I"
    // } else if(x < 0 && y >0){
    //      return "Qudarant II"
    // }else if( x < 0 && y <0){
    //      return "Qudarant III"
    // }else if(x > 0 && y <0){
    //      return "Qudarant IV"
    // }
    return (x > 0 && y > 0) ? "Quadrant I" :
                 (x < 0 && y > 0) ? "Quadrant II" :
                 (x < 0 && y < 0) ? "Quadrant III" :
                 (x > 0 && y < 0) ? "Quadrant IV" :
                 "Origin";
}
console.log(findQuadarnt (1, -1));

