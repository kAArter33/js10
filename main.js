let num1 = 2;
let num2 = 5;

function liczba(par1,par2) {
    if (num1 > num2) {
        console.log("parametr 1 jest wiekszy od parametru 2");
        return par1;
    }
    else
    {
        console.log("parametr 2 jest wiekszy od parametru 1")
        return par2;
    }
}
console.log(liczba(num1,num2));