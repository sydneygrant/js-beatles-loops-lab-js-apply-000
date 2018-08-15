// add solution here
function theBeatlesPlay(musicians, instruments){
  var newArr = [];
  for (var i = 0; i < musicians.length; i++){
    var str = musicians[i] + " plays " + instruments[i];
    newArr[i] = str;
  }
  return newArr;
}

function johnLennonFacts(facts){
  var count = 0;
  while (count < facts){
    var str += facts[count] + "!!!";
    count++;
  }
  var arr = [str];
  return arr;
}
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
