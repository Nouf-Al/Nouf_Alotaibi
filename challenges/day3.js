

// Reverse Array
function reverse(arr){
    j=0;
    arrnew= [];
    for(x=arr.length-1;x>=0;x--){
        arrnew[j]=arr[x];
        j++;
    }
    return arrnew;
}
arr=[1,2,3,4,5];
console.log(reverse(arr));

// Remove Negatives

function removeNegatives(arr){
    temp=[];
    for (x=0;x<arr.length; x++){
        if(arr[x]>0){
            temp.push(arr[x]);
        }
    }
    return temp;
}
arr=[1,2,3,-5,4,3,-9];
console.log(removeNegatives(arr));

// Skyline Heights
// -----------------------------------------------------
// You are given an array with heights of consecutive buildings in the city. For example, [-1,7,3] would
// represent three buildings: first is actually below street level, second is seven stories high, and third is
// three stories high (but hidden behind the seven-story onbe). You are situated at street level. Return an
// array containing heights of the buildings you can see, in order. Given [1,-1,7,3] return [1,7].
function skylineHeights(arr){
    var max = 0; 
    var count = 0; 
    for (var x = 0; x < arr.length; x++){
        if (arr[x] < max) {
            count++; 
        } 
        else {
            max = arr[x];
            arr[x - count] = arr[x];
        }
    }
    arr.length -= count;
    return arr;
}
arr=[-1,2,3,-2,6,2,3,7,1,2];
console.log(skylineHeights(arr));