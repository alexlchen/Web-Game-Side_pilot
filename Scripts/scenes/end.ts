// LEFT_CAVE SCENE
module scenes {
    export class End extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _endLabel: objects.Label;
        private _restartButton: objects.Button;
        private _bgImage: createjs.Bitmap;
        private _scoreLabel: objects.Label;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS ++++++++++++++++++++
        
        
        // Start Method
        public start(): void {
            //Add cover picture
            this._bgImage = new createjs.Bitmap("Assets/images/end.jpg");
            this._bgImage.scaleX =.8;
            this._bgImage.scaleY = 0.5; 
            //this._cover.x = 0;
            //this._cover.y = 0;
            this._bgImage.setBounds(0, 0, 640, 480);
            this.addChild(this._bgImage);
            
            //Add Menu Label
            this._endLabel = new objects.Label(
                "Game Over", "60px Consolas",
                "#FF0000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._endLabel);
            
            //Add Score Label 
            this._scoreLabel = new objects.Label(
                "Your Score:", "60px  Bold Italic", 
                "#ff0000", 
                config.Screen.CENTER_X - 50, config.Screen.CENTER_Y - 100, true);
            this.addChild(this._scoreLabel);
            
            // add the BACK button to the OVER scene
            this._restartButton = new objects.Button(
                "RestartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._restartButton);
           
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
             this._scoreLabel.text = "Your Score: "+ play.score;
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START_OVER Button click event handler
        private _restartButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}