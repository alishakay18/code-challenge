const findSum = function(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++ ){
    sum += array[i];
};
return sum;
}



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


 


const isPalindrome = function(str) {
  var word = str.toLowerCase();
  var reverseStr = word.split('').reverse().join(''); 
  return reverseStr === word;
};




const largestPair = function(array) {
  var x = 0;
  var y = 0;
  var p = 0;
  for (var i = 0; i < array.length; i++) {
    x = array[i];
    y = array[i + 1];
    if (x * y > p) {
      p = x * y;
    };
  };
  return p;
};

const removeParenth = function(str) {
var newstr;
var paren1 = str.indexOf('(')
var paren2 = str.indexOf(')') +1
var part1 = str.substr(0,paren1)
var part2 = str.substr(paren2)
return newstr = part1 + part2
};

const scoreScrabble = function(str) {
  
  let letterPoints = { a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10 },
        score = 0,
        i;

    for (i = 0; i < str.length; i++) {
        score += letterPoints[str[i]]; 
    }
    return score;

};
