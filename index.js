// add solution here
function theBeatlesPlay(musicians, instruments){
  var newArr = [];
  for (var i = 0; i < musicians.length; i++){
    var str = musicians[i] + " plays " + instruments[i];
    newArr[i] = str;
  }
  return newArr;
}

function johnLennonFacts(factsArray){
var i=0;
var newArray=[];
while (factsArray.length > i){
newArray.push(`${factsArray[i]}` + “!!!”);
i++;
}
return newArray;
}

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
