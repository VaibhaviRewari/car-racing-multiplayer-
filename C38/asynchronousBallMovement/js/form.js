class Form {
constructor(){
this.input=createInput("Name")
this.button=createButton('Play')
this.greeting=createElement('h3');
}

hide(){
 this.button.hide();
 this.input.hide();
 this.greeting.hide();


}

display(){
var title=createElement('h2');
title.html("Car Racing Game");
title.position(130,0);


this.input.position(130,190);
this.button.position(250,300);


this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name=this.input.value();
    playerCount+=1;
    player.updateCount(playerCount)
    this.greeting.html(" Hola "  +  player.name);
    this.greeting.position(130,190);

})

}


}