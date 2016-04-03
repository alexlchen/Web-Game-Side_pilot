var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
            //Add cover picture
            this._cover = new createjs.Bitmap("Assets/images/cover.jpg");
            this._cover.scaleX = .8;
            this._cover.scaleY = .8;
            //this._cover.x = 0;
            //this._cover.y = 0;
            this._cover.setBounds(0, 0, 640, 480);
            this.addChild(this._cover);
            //Add Menu Label
            this._menuLabel = new objects.Label("Mail Pilot", "60px Consolas Bold", "#ff0000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._menuLabel);
            // add the Instruction button to the MENU scene
            this._instructionButton = new objects.Button("InstructionButton", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._instructionButton);
            // Instruction Button event listener
            this._instructionButton.on("click", this._instructionButtonClick, this);
            // add the Start button to the MENU scene
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X + 100, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._startButton);
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Menu.prototype.update = function () {
        };
        //start game - play scene
        Menu.prototype._startButtonClick = function (event) {
            scene = config.Scene.PLAY;
            changeScene();
        };
        //open instruction scene
        Menu.prototype._instructionButtonClick = function (event) {
            scene = config.Scene.INSTRUCTION;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));

//# sourceMappingURL=menu.js.map
