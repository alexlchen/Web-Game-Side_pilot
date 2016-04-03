/** Source file name: scene.ts */
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

// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _menuLabel: objects.Label;
        private _startButton: objects.Button;
        private _instructionButton: objects.Button;
        private _cover: createjs.Bitmap;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            //Add cover picture
            this._cover = new createjs.Bitmap("Assets/images/cover.jpg");
            this._cover.scaleX =.8;
            this._cover.scaleY = .8; 
            //this._cover.x = 0;
            //this._cover.y = 0;
            this._cover.setBounds(0, 0, 640, 480);
            this.addChild(this._cover);
    
            //Add Menu Label
            this._menuLabel = new objects.Label(
                "Mail Pilot", "60px Consolas Bold",
                "#ff0000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._menuLabel);
            
            // add the Instruction button to the MENU scene
            this._instructionButton = new objects.Button(
                "InstructionButton",  
                config.Screen.CENTER_X - 100,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._instructionButton);
            // Instruction Button event listener
            this._instructionButton.on("click", this._instructionButtonClick, this);
            
            // add the Start button to the MENU scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X + 100,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._startButton);
           
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }
        
        //start game - play scene
        private _startButtonClick(event: createjs.MouseEvent) {
            
            scene = config.Scene.PLAY;
            changeScene();
        }
        
        //open instruction scene
        private _instructionButtonClick(event: createjs.MouseEvent) {
            
            scene = config.Scene.INSTRUCTION;
            changeScene();
        }
    }
}