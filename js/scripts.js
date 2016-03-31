//Start Business Logic


//Start Interface Logic
$(document).ready(function() {
  $("#blanks").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#intNum").val());
    // var roman = ["I","IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    // var arabic = ["1","4", "5", "9", "10", "40", "50", "90", "100", "400", "500", "900", "1000"]
    var roman = ["X", "V", "I"];
    var arabic = [10, 5, 1];
    var tempNum = number1;
    var result = [];

    if (number1 < 1 || number1 > 3999) {
      $("#not").text("Out of Range");
    }
    else {
      for (i = 0; i < arabic.length; i += 1) {     // This loop to give the subtract number from the array.
        console.log(i);
        for (j = number1; j >= 0 ; j -= 1) {     //  This loop for subtracting number untill the number can't be subtracted. And go out of the loop.
          if (number1 >= arabic[i]) {
            number1 = number1 - arabic[i];
            result.push(roman[i]);
          }
          else
          {break}
        }
console.log(result);
      }

    }


  });
});
