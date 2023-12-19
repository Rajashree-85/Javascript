const arr=[175,50,25];
let sum=0,result=0;

//Subtracts number from total sum each time the function is called
function addSum(sum,num){
    return sum-num;
}

//Calculates total sum of array elements
for(let i=0;i<arr.length;i++)
    sum += arr[i];

//Iteratively adds difference into final result
for(let i=0;i<arr.length;i++) {
    result+=addSum(sum, arr[i]);
    sum-=arr[i];
}

console.log(result);