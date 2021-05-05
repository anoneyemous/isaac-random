function randomize(){
  var characters = document.querySelectorAll("input[id^='nc'], input[id^='tc']");
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
  var next_run = "<h1>Try using <b>" + random_char + "</b> to defeat <b>" + random_boss + "</b>!</h1>";

  var boss_image = random_boss.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  var char_image = random_char.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  document.getElementById("boss_image").src="img/portrait_" + boss_image + ".png";
  document.getElementById("char_image").src="img/playerportrait_" + char_image + ".png";
  document.getElementById("vs_image").src="img/vs.png";

  document.getElementById("result").innerHTML = next_run;
}
