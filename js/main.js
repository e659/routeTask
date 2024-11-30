// Write a Function that take 2 integergers (n,m) then print all prime numbers between them

const findPrimeNum = (n, m) => {
  let temp;
  let flag;
  if (n > m) {
    temp = n;
    n = m;
    m = temp;
  }
  for (let i = n; i <= m; i++) {
    if (i == 1 || i == 0) {
      return false;
    }

    flag = 1;
    for (let j = 2; j < i / 2; ++j) {  
      if (i % j == 0) {
        flag = 0;
        break;
      }
    }
    if (flag == 1)
    console.log(i)
  }
};

const result=findPrimeNum(50,20);

console.log(result)