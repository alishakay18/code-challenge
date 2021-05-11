const findSum = function(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++ ){
    sum += array[i];
};
return sum;
}
findSum([2,4,6]);
console.log(findSum([2,4,6]));


const findFrequency = function(array) {
var most;
var mostFreq = 1;
var m = 0;
for (var i=0; i<array.length; i++)
{
  for (var j=i; j<array.length; j++)
        {
           if (array[i] == array[j])
                 m++;
                if (mostFreq<m)
                {
                  mostFreq=m; 
                  most = array[i];
                }
        }
        m=0;
}

 let leastFreq = array[0]
  const counted = array.reduce((acc, item) => { 
    if (!acc[item]) {
      acc[item] = 1
    } else {
      acc[item]++
    }

    if(acc[item] < acc[leastFreq]) {
      leastFreq = item
    }

    return acc;
  }, {});

return ("most: " + most + ", least: " + leastFreq);

};

findFrequency(['a', 'b', 'c', 'a', 'b', 'c', 'a', 'a', 'd']);
 


const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
