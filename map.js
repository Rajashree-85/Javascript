const arr=[5,12,6,3];
let answer=[]

function addTen(num){
    return num+10;
}

for(int i=0;i<arr.length;i++){
    answer.push(addTen(arr[i]));
}

console.log(answer);