//Start Interface Logic
$(document).ready(function() {
  $("#blanks").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#intNum").val());
    var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V","IV", "I"];
    var arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var result = [];

    if (number1 < 1 || number1 > 3999) {
      $("#not").text("Out of Range");
    }
    else {
      for (i = 0; i < arabic.length; i += 1) {     // This loop to give the subtract number from the array.
        for (j = number1; j >= 0 ; j -= 1) {     //  This loop for subtracting number untill the number can't be subtracted. And go out of the loop.
          if (number1 >= arabic[i]) {
            number1 = number1 - arabic[i];
            result.push(roman[i]);     //  This will push the letter the result array.
          }
          else
          {break}
        }
      }
    }
    $("#answer").text(result.join(""));
  });
});
