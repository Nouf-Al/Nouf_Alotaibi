function printOdds1To255(){
    for(x=1;x<=255;x++){
        if(x%2==1)
        console.log(x)

    }
}

function getEven1000(){
    var sum =0;
    for(x=1;x<=1000;x++){
        if(x%2==0)
        sum+=x
    }
    console.log(sum);
}
getEven1000();

function sumOdd5000(){
    var sum =0;
    for(x=1;x<=5000;x++){
        if(x%2==1)
        sum+=x
    }
    return sum;
}
console.log(sumOdd5000());

function iterateArray(arr){
    sum=0;
    for(x=0;x<arr.length;x++){
        sum+=arr[x];
    }
    return sum;
}
arr=[1,2,3];
console.log(iterateArray(arr));

max=0;
function findMax(arr){
    for(x=0;x<arr.length;x++){
        if(arr[x]>max){
            max=arr[x]
        }
    }
    return max;
}
arr=[1,2,3,-4,4];
console.log(findMax(arr));

var sum=0;
function findAvg(arr){
    for(x=0;x<arr.length;x++){
        sum+=arr[x];

    }
    
    return sum/arr.length;
}
arr=[1,3,5,7,20];
avg = findAvg(arr);
console.log(avg);

function arrayOdd(){
    var arr=[];
    for(x=1;x<=50;x++){
        if(x%2==1) {
            arr.push(x);
        }
    }
    return arr;
}
console.log(arrayOdd());

function GreaterThanY(arr, y){
    newarr=[];
    for (x=0; x<arr.length; x++){
        if (y<arr[x]){
            newarr.push(arr[x]);
        }
    }
    return newarr;
}
arr=[1,2,3,9,10,11,13,5]
console.log(GreaterThanY(arr, 9));

function squares(arr){
    for(x=0;x<arr.length;x++){
        arr[x]*=arr[x];
    }
    return arr;
}
arr =[1,5,10,-2];
console.log(squares(arr));

function negatives(arr){
    for (x=0; x<arr.length; x++){
        if (0>arr[x]){
            arr[x]=0;
        }
    }
    return arr;
}
arr=[1,4,5,-6,-7]
console.log(negatives(arr));


function maxMinAverageArray(arr){
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
    newarr=[max,min,total/arr.length]
    return newarr;
}
arr=[1,5,10,-2];
console.log(maxMinAverageArray(arr));

function swapValues(arr){
    temp=arr[arr.length-1];
    arr[arr.length-1]=arr[0];
    arr[0]=temp;
    return arr
}
arr=[1,5,10,-2];
console.log(swapValues(arr));

function numToSring(arr){
    for (x=0; x<arr.length; x++){
        if (0>arr[x]){
            arr[x]="Dojo";
        }
    }
    return arr;
}
arr=[1,4,5,-6,-7]
console.log(numToSring(arr));
    