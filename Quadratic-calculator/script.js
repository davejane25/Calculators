{
  /* <script> */
}
var a, b, c;
var outputText;

function validate() {
  // get the input
  a = document.forms["input_form"]["aterm"].value;
  b = document.forms["input_form"]["bterm"].value;
  c = document.forms["input_form"]["cterm"].value;

  // validate a, b and c
  if (a == 0) {
    outputText = "<em>a</em> cannot equal zero!";
  } else if (isNaN(a)) {
    outputText = "<em>a</em> must be a number!";
  } else if (isNaN(b)) {
    outputText = "<em>b</em> must be a number!";
  } else if (isNaN(c)) {
    outputText = "<em>c</em> must be a number!";
  } else {
    // calculate the result using x = (-b +- sqrt(b^2 - 4ac)) / 2a
    var x1 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    var x2 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    outputText =
      "For the equation <strong>" +
      (a == 1 ? "" : a) +
      "x\u00B2 + " +
      (b == 1 ? "" : b) +
      "x + " +
      c +
      " = 0</strong>, x can equal <strong>" +
      x1 +
      "</strong> or <strong>" +
      x2 +
      "</strong>";
  }

  // output the result (or errors)
  document.getElementById("output_text").innerHTML = outputText;
}
