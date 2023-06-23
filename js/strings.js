const fizzBuzz = function (n) {
  const answer = [];
  let i = 1;

  while (i <= n) {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        answer.push('FizzBuzz');
        break;
      case i % 3 === 0:
        answer.push('Fizz');
        break;
      case i % 5 === 0:
        answer.push('Buzz');
        break;
      default:
        answer.push(String(i));
    }
    i++;
  }

  return answer;
};

fizzBuzz(5);
