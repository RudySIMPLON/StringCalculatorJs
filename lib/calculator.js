
var calculator = function (input) {
    if(input === null || input === ''){
      return 0;
    }

    if(input.length > 1){
      var result = input.split(' + ');
      result = result.reduce(addition);
      return result;
    }

    return parseInt(input, 10);
};

function addition(a,b){
  return parseInt(a,10) + parseInt(b,10);
}

module.exports = {
    StringCalculator: calculator
};