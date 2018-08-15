// add solution here
function theBeatlesPlay(musicians, instruments){
  var newArr = [];
  for (var i = 0; i < musicians.length; i++){
    var str = musicians[i] + " plays " + instruments[i];
    newArr[i] = str;
  }
  return newArr;
}

// function johnLennonFacts(facts){
// var i=0;
// var newArray=[];
// while (i < facts.length){
// newArray.push(`${facts[i]}` + “!!!”);
// i++;
// }
// return newArray;
// }

// function johnLennonFacts(facts){
//   var count = 0;
//   var str = "";
//   while (count < facts){
//     str += facts[count] + "!!!" + '\n';
//     count++;
//   }
//   var arr = [str];
//   return arr;
// }
//
// function iLoveTheBeatles(number){
//   var arr = [];
//   var count = 0;
//   do{
//     arr[count] = "I love the Beatles";
//     count++;
//
//   } while (number < 15);
//   return arr;
// }

function iLoveTheBeatles(n){
var strings=[];
do{
n++;
strings.push("I love the Beatles!")
}while (n < 15);
return strings;
}
