class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
       this.right = createButton('>>');
       this.left = createButton('<<');
       this.count = 0;
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(600, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(790,300);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(795,400);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(830, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        
        this.right.position(600, 620);
        this.right.style('width', '70px');
        this.right.style('height', '50px');
        this.right.style('background', 'lightgrey');
        this.right.style('font-size', "30px");
        this.right.hide();

        this.right.mousePressed(()=>{
            if (player.index !== null) {
               this.count = 1;
            }
        })
        this.right.mouseReleased(()=>{
            if (player.index !== null) {
               this.count = 0;
            }
        })

        this.left.mousePressed(()=>{
            if (player.index !== null) {
                this.count = 2;
            }
        })
        this.left.mouseReleased(()=>{
            if (player.index !== null) {
               this.count = 0;
            }
        })

        
        this.left.position(500, 620);
        this.left.style('width', '70px');
        this.left.style('height', '50px');
        this.left.style('background', 'lightgrey');
        this.left.style('font-size', "30px");
        this.left.hide();

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });

    }
}

