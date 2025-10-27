// window.onload = init;

function submitButton() {
  var txt;
  if (confirm("Thank you for leaving a review!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}
