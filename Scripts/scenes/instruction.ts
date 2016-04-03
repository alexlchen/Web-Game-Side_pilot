// LEFT_CAVE SCENE
module scenes {
    export class Instruction extends objects.Scene {
        
        private _instructionLabel: objects.Label;
        private _backToGameButton: objects.Button;
        private _background: createjs.Bitmap;
        constructor() {
            super();
        }
        
        
        // Start Method
        public start(): void {
            
            //Add cover picture
            this._background = new createjs.Bitmap("Assets/images/background.jpg");
            this._background.scaleX =.75;
            this._background.scaleY = .8; 
            //this._background.x = 0;
            //this._background.y = 0;
            this._background.setBounds(0, 0, 640, 480);
            this.addChild(this._background);
            
            //Add INSTRUCTION Label
            this._instructionLabel = new objects.Label(
                "INSTRUCTION:\n\n1.To start the game, press the START button.\n\n2.Use mouse to control the player move \n\n  to left or right.\n\n3.Avoid hitted by the cloud or island.", 
                "25px Consolas",
                "#00ff00",
                20,
                100, false);
            this.addChild(this._instructionLabel);
            
            // add the BACK to game button to the instruction scene
            this._backToGameButton = new objects.Button(
                "BackButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._backToGameButton);
           
            // Back to game Button event listener
            this._backToGameButton.on("click", this._backToGameButtonClick, this);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }

        private _backToGameButtonClick(event: createjs.MouseEvent) {

            scene = config.Scene.MENU;
            changeScene();
        }
    }
}