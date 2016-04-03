var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEFT_CAVE SCENE
var scenes;
(function (scenes) {
    var Instruction = (function (_super) {
        __extends(Instruction, _super);
        function Instruction() {
            _super.call(this);
        }
        // Start Method
        Instruction.prototype.start = function () {
            //Add cover picture
            this._background = new createjs.Bitmap("Assets/images/background.jpg");
            this._background.scaleX = .75;
            this._background.scaleY = .8;
            //this._background.x = 0;
            //this._background.y = 0;
            this._background.setBounds(0, 0, 640, 480);
            this.addChild(this._background);
            //Add INSTRUCTION Label
            this._instructionLabel = new objects.Label("INSTRUCTION:\n\n1.To start the game, press the START button.\n\n2.Use mouse to control the player move \n\n  to left or right.\n\n3.Avoid hitted by the cloud or island.", "25px Consolas", "#00ff00", 20, 100, false);
            this.addChild(this._instructionLabel);
            // add the BACK to game button to the instruction scene
            this._backToGameButton = new objects.Button("BackButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._backToGameButton);
            // Back to game Button event listener
            this._backToGameButton.on("click", this._backToGameButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Instruction.prototype.update = function () {
        };
        Instruction.prototype._backToGameButtonClick = function (event) {
            scene = config.Scene.MENU;
            changeScene();
        };
        return Instruction;
    }(objects.Scene));
    scenes.Instruction = Instruction;
})(scenes || (scenes = {}));

//# sourceMappingURL=instruction.js.map
