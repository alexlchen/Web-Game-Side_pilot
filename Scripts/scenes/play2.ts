
/** Source file name: play2.ts */
/** Author: Liyi Chen   */
/** Last modified: Liyi Chen*/
/** Date last Modified: April 2 2016 */
/** Description: This project is buildt on the base of The temperate project that created by Professor 
 *  Tom Tsiliopoulos who is teaching COMP392 - Advanced Graphic. 
 *  The purpose of this project is creating a mini game wiht a pilot, some clouds and islands as enemies 
 *  The user uses mouse  to control the player to move left and right
 *  If the player collides with cloud or island, it loses a life. the player totally has five lives.
 *  If the player keep living,  score keeps adding to it.
 *  The project is built on TypeScript, JavaScript, Create.js and so on.
 */


// PLAY SCENE
module scenes {
    export class Play2 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _lawn: objects.Lawn;
        private _island: objects.Island;
        private _clouds: objects.Cloud[];
        private _cloudCount:number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        
        public score:number =0;
        public lives:number = 5;
        static count:number = 0; //every 100 counts add 10 credit to the score
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
           
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            // Add music
            createjs.Sound.play("bgMusic").loop = -1;
            createjs.Sound.volume = 18;
            
            // Set Cloud Count
            this._cloudCount = 3;
            
            // Instantiate Cloud array
            this._clouds = new Array<objects.Cloud>();
                
            // added ocean to the scene
            this._lawn = new objects.Lawn();
            this.addChild(this._lawn);

            // added island to the scene
            this._island = new objects.Island();
            this.addChild(this._island);

            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            // Add playing sound
            createjs.Sound.play("gameMusic").loop = -1;
            
            //added clouds to the scene
            for(var cloud:number = 0; cloud < this._cloudCount; cloud++) {
                this._clouds[cloud] = new objects.Cloud();
               this.addChild(this._clouds[cloud]);
            }
            
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            
            // added lives and score labels to the scene
            this._livesLabel = new objects.Label("Lives:", "30px Bold Italic", "#FF0000", 20, 0, false);
            this.addChild(this._livesLabel);
            
            this._scoreLabel = new objects.Label("Score:", "30px Bold Italic", "#FF0000", 425, 0, false);
            this.addChild(this._scoreLabel);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._lawn.update();
            this._island.update();
           
            this._player.update();
           
            this._clouds.forEach(cloud => {
                cloud.update();
                this._collision.check(cloud);
            });
            
            //add score to the player
            while(Play.count++){
                if((Play.count%100) ==0){
                    this.score += 10;
                    Play.count = 0;
                }
            }
            
            this._collision.check(this._island);
            
            this._livesLabel.text = "Lives: " + this.lives;
            this._scoreLabel.text = "Score: " + this.score;
            
            if (this.lives == 0) { // if player's lives are zero, change the scene to the end scene. 
                createjs.Sound.stop();
                // Add dead sound
                createjs.Sound.play("explosion");
                scene = config.Scene.END;
                changeScene();
            }
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}