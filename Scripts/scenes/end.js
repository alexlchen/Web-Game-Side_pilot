var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEFT_CAVE SCENE
var scenes;
(function (scenes) {
    var End = (function (_super) {
        __extends(End, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function End() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++
        // Start Method
        End.prototype.start = function () {
            //Add cover picture
            this._bgImage = new createjs.Bitmap("Assets/images/end.jpg");
            this._bgImage.scaleX = .8;
            this._bgImage.scaleY = 0.5;
            //this._cover.x = 0;
            //this._cover.y = 0;
            this._bgImage.setBounds(0, 0, 640, 480);
            this.addChild(this._bgImage);
            //Add Menu Label
            this._endLabel = new objects.Label("Game Over", "60px Consolas", "#FF0000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._endLabel);
            //Add Score Label 
            this._scoreLabel = new objects.Label("Your Score:", "60px  Bold Italic", "#ff0000", config.Screen.CENTER_X - 50, config.Screen.CENTER_Y - 100, true);
            this.addChild(this._scoreLabel);
            // add the BACK button to the OVER scene
            this._restartButton = new objects.Button("RestartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._restartButton);
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        End.prototype.update = function () {
            this._scoreLabel.text = "Your Score: " + play.score;
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        End.prototype._restartButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));

//# sourceMappingURL=end.js.map