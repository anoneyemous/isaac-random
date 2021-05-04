function randomize(){
  var characters = document.querySelectorAll("input[id^='nc']");
  var bosses = document.querySelectorAll("input[id^='eb']");

  var submit = document.getElementById("submit");

  var chosen = [];

  for (var i = 0; i < characters.length; i++) {
    if (characters[i].checked) chosen.push(characters[i].value);
  }

  var random_char = chosen[Math.floor(Math.random() * chosen.length)];

  var chosen = [];

  for (var i = 0; i < bosses.length; i++) {
    if (bosses[i].checked) chosen.push(bosses[i].value);
  }

  var random_boss = chosen[Math.floor(Math.random() * chosen.length)];

  var next_run = "<h1>Try beating <b>" + random_boss + "</b> as <b>" + random_char + "</b>!</h1>";

  return document.getElementById("result").innerHTML = next_run;
}
