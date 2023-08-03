//Print odds 1-20

for(let i=0;i<=20;i++){
    if(i%2==0){
        console.log(i);
    }
}

//Decreasing Multiples of 3
for(let i=100;i>=0;i-=3){
    console.log(i);
}
//Print the sequence
for(let i=4;i>=-3.5;i-=1.5){
    console.log(i);
}
//Sigma
let sum=0
for(let i=0;i<=100;i++){
    sum+=i;
    console.log(`The sum is ${sum}`);
}

//Factorial
let product=1;
for(let i=1;i<=12;i++){
    product*=i;
    console.log(`The product is ${product}`);
};
