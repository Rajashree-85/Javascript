const arr=[5,12,6,3,10];
let answer=[];

function addTen(num){
    return num+10;
}

for(let i=0;i<arr.length;i++){
    //Pushes new element into new array only if the condition is true
    if(arr[i]%3===0)
    answer.push(addTen(arr[i]));
}

//Returns new array with different or same size......
console.log(answer)