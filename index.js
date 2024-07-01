// code your solution here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;

}
console.log(saturdayFun());

function mondayWork (activity="go to the office"){
    return `This Monday, I will ${activity}.`;

}
console.log(mondayWork( "I will work from home"));

function wrapAdjective(string = "*") {
    return function (adj = "special") {
      return `You are ${string}${adj}${string}!`;
    }
  }