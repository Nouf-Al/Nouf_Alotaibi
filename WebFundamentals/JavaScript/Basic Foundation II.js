
function biggieSize(arr){
    for (x=0; x<arr.length; x++){
        if (0<arr[x]){
            arr[x]="big";
        }
    }
    return arr;
}
arr=[-1,3,5,-5]
console.log(biggieSize(arr));


function printLowReturnHigh(arr){
    min=arr[0];
    max=arr[0];
    for (x=0; x<arr.length; x++){
        if (min>arr[x]){
            min=arr[x]
        }
        if (max<arr[x]){
            max=arr[x]
        }
    }
    console.log(min);
    return max;
}
arr=[-1,3,5,-5]
console.log(printLowReturnHigh(arr));


function printOneReturnAnother(arr){
    odd=0;
    for(x=1;x<arr.length;x++){
        console.log(arr[x])
    }
    for(x=0;x<arr.length;x++){
        if(arr[x]%2==1){
            odd=arr[x];
            return odd;
        }
    }
}
arr=[2,2,3,45,6,]
console.log(printOneReturnAnother(arr));


function doubleVision(arr){
    arrnew=[];
    for(x=0;x<arr.length;x++){
        arrnew.push(arr[x]*=2);
    }
    return arrnew;
}
arr =[1,2,3];
console.log(doubleVision(arr));


function countPositives(arr){
    var count =0;
    for(x=0;x<=arr.length;x++){
        if(arr[x]>0)
        count++;
    }
    arr.pop();
    arr.push(count);
    return arr;
}
arr =[-1,1,1,1];
console.log(countPositives(arr));


function evensOdds(arr){
    for(x=0;x<arr.length;x++){
        if(arr[x]%2==1){
            if(arr[x+1]%2==1){
                if(arr[x+2]%2==1){
                    console.log("That's odd!");
                }
            }
        }
        if(arr[x]%2==0){
            if(arr[x+1]%2==0){
                if(arr[x+2]%2==0){
                    console.log("Even more so!");
                }
            }
        }
    }
}
arr=[1,3,2,2,4,6];
console.log(evensOdds(arr));



function incrementTheSeconds(arr){
    var count =0;
    for(x=0;x<arr.length;x++){
        if(x%2!=0){
            arr[x]=arr[x]+1;
        }
        console.log(arr[x]);
    }  
    return arr;
}
arr =[1,2,3,4];
console.log(incrementTheSeconds(arr));


function previousLengths(arr){
    for (x=arr.length-1;x>0;x--){
        arr[x] = arr[x-1].length;
    }
    return arr;
}
arr=["hello", "dojo", "awesome"];
console.log(previousLengths(arr));


function addSeven(arr){
    newarr=[];
    for(x=0;x<arr.length;x++){
        newarr.push(arr[x]+=7);
    }
    return newarr;
}
console.log(addSeven([1,2,3]));


function reverse(arr){
    arr.reverse();
    return arr;
}
arr=[1,2,3,4];
console.log(reverse(arr));


function outlook(arr){
    newarr=[];
    for(x=0;x<arr.length;x++){
        if(arr[x]<0)
        newarr.push(arr[x]);
        else
        newarr.push(-arr[x])
    }
    return newarr;
}
arr=[1,-3,5,7]
console.log(outlook(arr));


function hungry(arr){
    count=0;
    for(x=0;x<arr.length;x++){
        if(arr[x]=="food"){
        console.log("yummy")
        count++;
        }
    }
    if(count==0){
        console.log("I'm hungry")
    }
}
arr=["nouf", "nouf", "food","nouf"];
console.log(hungry(arr));


function swapTowardCenter(arr){
    temp=arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=temp;
    b=arr.length-2;
    for(x=1;x<b;x++){
        temp=arr[x+1];
        arr[x+1]=arr[b-1];
        arr[b-1]=temp;
        b--;
    }
    console.log(arr)
}
arr=[1,6,3,4,1,7,2];
swapTowardCenter(arr);


function scaleArray(arr,num){
    for(x=0;x<arr.length;x++){
        arr[x]*=num;
    }
    return arr;
}
console.log(scaleArray([1,2,3], 3));
    