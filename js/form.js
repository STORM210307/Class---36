class Form{
    constructor() {}

display() {

var title = createElement("h2");
title.html("car Racing Game");
title.position(400,100);

var input = createInput("name");
var button = createButton("play");
var greeting = createElement("h3");
input.position(430,250);
button.position(430,300);

button.mousePressed(function() {

input.hide();
button.hide();

var name = input.value();
playerCount += 1;
player.update(name);
player.updateCount(playerCount);
greeting.html("hello"  + name);
greeting.position(430,250);

})

}
}