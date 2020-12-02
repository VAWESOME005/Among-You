class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.matchmake = createElement('h3')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.matchmake.hide()
    
  }

  display(){
    this.title.html("Among You");
    this.title.position(displayWidth/2 - 65, 0);

    this.input.position(displayWidth/2 - 65 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 , displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      console.log(player.name)

      this.greeting.html("Hello " + player.name)
    
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
  
      gameState = 1
    })
  }
}
     

    