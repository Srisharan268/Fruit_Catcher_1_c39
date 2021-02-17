class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage(player_img);
    
    player2 = createSprite(800,500);
    player2.addImage(player_img);

    players=[player1,player2];

        }
    
    play(){
        
        form.hide();
        
        form.right.show();
        form.left.show();

        player.update();
        Player.getPlayerInfo();

        image(back_img, 0, 0, 1000, 800);
        var x =100;
        var y=200;
        var index =0;
        index = 0;
        drawSprites();
        for(var plr in allPlayers){
        
        
            index = index+1;
            x = 500-allPlayers[plr].distance;
            y=500;

            
            players[index -1].x = x;
            players[index -1].y = y;

            fill("white");
            textSize(25);
            text("Player"+index+" Score : "+allPlayers[plr].score,100,index*50);

            if(index === player.index){
                
                fill("black");
                textSize(25);
                text(allPlayers[plr].name ,x-25,y+25);
                
            }
        
        }

        if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
            player.distance -= 10
            player.update();
        }
        if (keyIsDown(LEFT_ARROW) && player.index !== null) {
            player.distance += 10
            player.update();
        }

        if(form.count == 1){
            player.distance -= 10
            player.update();
        }

        if(form.count == 2){
            player.distance += 10
            player.update();
        }
        

        if (frameCount % 20 === 0) {
            fruit = createSprite(random(100, 1000), 0, 100, 100);
            fruit.velocityY = 6;
            var rand = Math.round(random(1,5));

            if(fruit.isTouching(players)){
                fruit.destroy();
            }
            
            switch(rand){
                case 1: fruit.addImage("fruit1",fruit1_img);
                break;
                case 2: fruit.addImage("fruit1", fruit2_img);
                break;
                case 3: fruit.addImage("fruit1", fruit3_img);
                break;
                case 4: fruit.addImage("fruit1", fruit4_img);
                break;
                case 5: fruit.addImage("fruit1", fruit5_img);
                break;
            }
            fruitGroup.add(fruit);
            
        }
            
        if (player.index !== null) {
            for(var i = 0 ;i<fruitGroup.length;i++){
                if(fruitGroup.get(i).isTouching(players[player.index-1])){
                    player.score +=1;
                    player.update();
            
                }if(fruitGroup.get(i).isTouching(players)){
                    fruitGroup.get(i).destroy();
                }
            }
            
        }

    }

    end(){
       console.log("Game Ended");
    }
}