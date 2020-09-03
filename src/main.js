import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import $ from "jquery";
import { Game, Character } from "./../src/rpg.js";

let rpg = new Game();

$("form#user").submit(function (event) {
  event.preventDefault();
  let inputtedName = $("input#name").val();
  let inputtedClass = $("form input[name=class]:radio").val();
  $("input#name").val();
  let type = "player";
  let newCharacter = new Character(inputtedName, inputtedClass, type, true);
  let enemy = new Character('Bad A Joe', 'enemy', type, true);
  rpg.addCharacter(newCharacter);
  rpg.addCharacter(enemy);

  $('#player-1-name').text(rpg.characters[0].name);
  $('.health-1').text(rpg.characters[0].health);
  $('#player-2-name').text(rpg.characters[1].name);
  $('.health-2').text(rpg.characters[1].health);
});

$('#attack-1').click(function() {
  alert('hello take my swqord');
  rpg.newAttackMove(1);
  $('.health-2').text(rpg.characters[1].health);
})
