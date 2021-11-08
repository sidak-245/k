class Game {
    constructor(){
  
    }
  
    async getState(){
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value",function(data){
          gameState = data.val();
      });
      console.log(gameState)
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          console.log("llllll")
          form = new Form()
          form.display();
        
        }
        character1 = createSprite(displayWidth - 280, displayHeight - 420)
        character2 = createSprite(100, displayHeight - 420)
        character1.addImage("character1",charc1)
        character2.addImage("character2",charc2)
        character1.scale =0.5
        character2.scale = 0.5
    }
  play(){
    form.hide()
    image(bg,0,0, displayWidth-200, displayHeight-250)
    drawSprites()
  }
}