var testArr = [6,3,5,1,2,4];
var sum=0;

    for(x=0;x<testArr.length;x++){
        sum+=testArr[x];
        console.log("Num "+testArr[x]+", Sum "+sum);
    }



var testArr = [6,3,5,1,2,4];
    for(x=0;x<testArr.length;x++){
        testArr[x]= testArr[x]*x;
    }
    console.log(testArr);
