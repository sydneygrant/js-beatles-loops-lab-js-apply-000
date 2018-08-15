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
//   var arr = [];
//   var count = 0;
//   var i = 0;
//   while (count < facts){
//     arr[i] =facts[count] + "!!!");
//     count++;
//   }
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
