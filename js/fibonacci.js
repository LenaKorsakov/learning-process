const fib = (n) => {
  let prev = 0;
  let next = 1;

  for (let i = 0; i < n; i++) {
    const temp = next;
    next = prev + next;
    prev = temp;
  }
  return prev;
};

const fibo = function(n) {
  if (n < 3) {return 1;}
  let a = 0, b = 1;
  for (let i = 1; i < n; i++)
  {[a, b] = [b, a+b];}
  return b;
};

fibo(5);

const fibRec = (n) => {
  if (n < 3) {
    return 1;
  }

  return fibRec(n-1) + fibRec(n-2);
  //такая функция будет очень долго выполняться
};

fibRec(8);

