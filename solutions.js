// Sum of Two Numbers
function sum(a, b) 
{
  if (!Number.isFinite(a)||!Number.isFinite(b))
  {
  console.log("Los datos de entrada no son adecuados");
  return;
  }
  
  let suma = a + b;
  return suma;
}

// Factorial of a Number
function factorial(n) 
{
  if (!Number.isFinite(n))
  {
  console.log("Los datos de entrada no son adecuados");
  return;
  }
  
  if(n==0)
    return 1;
  else
  {
    let fact = 1;
    for(let i=1; i<=n; i++)
    {
      fact *= i;
    }
    return fact;
  }  
}

// Find the Largest Number
function findLargest(arr) 
{
  // Add your code here
}

// Count Vowels in a String
function countVowels(str) 
{
  let conta=0;
  const vocales = ["a", "e", "i", "o", "u"];

  for(let char of str)
  {
    if(vocales.includes(char))
    {
      conta++;
    }
  }
  return conta;
  
}

// Check if a Number is Prime
function isPrime(n) 
{
  if (!Number.isFinite(n))
  {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  
  if (n <= 1) 
    return false;
  
  for (let d = 2; d <= Math.sqrt(n); d++) 
  {
    if (n % d === 0) 
    {
      return false;
    }
  }
  return true;
}

module.exports = 
{
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
