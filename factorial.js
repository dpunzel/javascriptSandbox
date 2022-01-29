// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
    //code here
    if (number === 2) return 2;
    answer = number * (findFactorialRecursive(number -1))
    return answer;
  }
  
  function findFactorialIterative(number) {
    //code here
    let answer = 1, i;
    if (number == 0) return 1;
    for ( let i = 2; i < number; i++) {
        answer += i;
    }
    return answer;
  }
  console.log(findFactorialRecursive(5))