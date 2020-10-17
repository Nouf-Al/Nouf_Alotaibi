function print1To255(){
    for (x=1; x <=255; x++){
    console.log(x);
    }
}

function printIntsAndSum0To255(){
            var sum = 0;
            for (x=1; x <=255; x++){
            console.log(x);
            sum += x;
            console.log(sum);

            }
        }

function printMaxOfArray(arr){
    var max=0;
    for (x=0; x < arr.length; x++){
        if (max < arr[x]){
            max = arr[x];
            }
        }
            console.log(max);
    }
arr = [10,2,5,8,9];
printMaxOfArray(arr);


function returnOddsArray1To255(arr){
    var oddArr=[];
    for (x=1; x <= 255; x++){
        if (x%2 == 1){
            oddArr.push(x);
            }
        }
        return(oddArr);
    }

function returnArrayCountGreaterThanY(arr, y){
    var count=0;
    for (x=0; x<arr.length; x++){
        if (y<arr[x]){
            count=count+1;
        }
    }
    return(count);
}

function printMaxMinAverageArrayVals(arr){
    var min= arr[0];
    var max=arr[0];
    var total=0;
    for (x=0;x<arr.length;x++){
        if(min>arr[x]){
            min= arr[x];
        }
        if(max<arr[x]){
            max= arr[x];
        }
        total += arr[x];
    }
    var avg=total/arr.length;
    console.log(min);
    console.log(max);
    console.log(avg)

}

function swapStringForArrayNegativeVals(arr ) {
    for (x=0;x<arr.length; x++){
        if(arr[x]<0){
            arr[x] = "Dojo";

        }
    }
    console.log(arr);
}
function printOdds1To255(){
    for(x=1;x<=255;x++){
        if(x%2==1)
        console.log(x)

    }
}

function printArrayVals(arr){
    for(x=0;x<arr.length;x++){
        console.log(arr[x]);

    }
}

function printAverageOfArray(arr){
    var total=0;
    for(x=0;x<arr.length;x++){
        total = total + arr[x];
    }
    var avg = total/arr.length;
    console.log(avg);
}
function squareArrayVals(arr){
    for(x=0;x<arr.length;x++){
        arr[x] = arr[x]*arr[x];
    }
    
    return arr;
}
function zeroOutArrayNegativeVals(arr) {
    for (x=0;x<arr.length; x++){
        if(arr[x]<0){
            arr[x] = 0;

        }
    }
    return(arr);
}

function shiftArrayValsLeft(arr){
    for (x=0;x<arr.length; x++){
        arr[x]= arr[x+1];
    }
    arr.pop(arr[0]);
    arr.push(0)
    return arr;
}
