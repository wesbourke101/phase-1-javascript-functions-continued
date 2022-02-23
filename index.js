// code your solution here
let saturdayFun = function (activity = 'roller-skate') {
    return 'This Saturday, I want to ' + activity + '!';
}

let mondayWork = function (action = "go to the office") {
    return "This Monday, I will " + action + ".";
}

let wrapAdjective = function (passThrough = "*") {
    return function(parameter = "special"){
        return `You are ${passThrough}${parameter}${passThrough}!`
    }
}