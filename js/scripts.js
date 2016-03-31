//Start Business Logic


//Start Interface Logic
$(document).ready(function() {
  $("#blanks").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#intNum").val());
    // var roman = ["I","IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    // var arabic = ["1","4", "5", "9", "10", "40", "50", "90", "100", "400", "500", "900", "1000"]
   var roman = ["X","IX", "V", "IV", "I"]
   var arabic = [10, 9, 5, 4, 1]

    var result = [];

    if (number1 < 1 || number1 > 3999) {
      $("#not").text("Out of Range");
    }
    else if (number1 <= 10) {
      for (i = 0; i <= 5; i += 1) {
        if (number1 % arabic[i] === 0) {
          result.push(roman[i]);
          console.log(result);
          {break}
        }

      }

    }

  });
});
