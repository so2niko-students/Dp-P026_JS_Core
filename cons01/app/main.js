const n = 567;

const ed = n % 10; // n / 10 => 56.7
// 567 - 7 = 560 / 10 = 56 % 10 = 6
const des = ((n - ed) / 10) % 10;
const sot = (n - des * 10 - ed) / 100;

const v = 12412432423;
const vOfFile = 820;
const ost = v % vOfFile;
const vNew = v - ost;
const nOfFile = vNew / vOfFile;

function findDup(str){//Ukraine and France
    const low = str.toLowerCase().split('');//['u', 'k',......., 'f', 'r', ...'e']
    const answ = low.reduce((acc, el) => {
        if(acc[el]){
            acc[el]++;
        }else{
            acc[el] = 1;
        }

        return acc;
    }, {});

    let count = 0;
    for(let el in answ){
        count = answ[el] > 1 ? count + 1 : count;
    }

    return count;
}


console.log(findDup('Ukraine and France'));