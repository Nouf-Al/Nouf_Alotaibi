
function pushFront(arr, val) {
    arrnew=[val];
    for (x=0;x<arr.length;x++){
        arrnew[x+1]=arr[x];

    }
    return arrnew;
}
arr = [5,6,7,4,3]
console.log("Old Array: ["+arr+"]");
console.log("New Array: ["+pushFront(arr, 10)+"]");


function PopFront(arr){
    removedVal=arr[0];
    arrnew = [] ;
    j=0
    for(x=1;x<arr.length;x++){
        arrnew[j]=arr[x];
        j++;
    }
    return ("removed value: "+removedVal+ ", Array after removing: ["+ arrnew+"]");
}
arr = [3,6,3,4,3,5,7,8,9,10]
console.log(PopFront(arr));


function insertAt(arr, index, val){
    for(x=arr.length; x> index ; x--){
        arr[x]=arr[x-1]
    }
    arr[index] =val;
    return arr
}
arr=[1,2,3,4,5,5];
console.log("After inserting in Array: "+insertAt(arr, 3, 10));


function removeAt(arr, index){
    for(x=0; x< arr.length ; x++){
        arr[x] = arr[x+1]
    }
    arr.length--;
    return arr
}
arr=[1,2,3,4,5,5];
console.log("Array after deleting: ["+removeAt(arr, 1)+"]");
