var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
            this.score = 0;
            this.lives = 5;
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            // Add music
            createjs.Sound.play("bgMusic").loop = -1;
            createjs.Sound.volume = 18;
            // Set Cloud Count
            this._cloudCount = 3;
            // Instantiate Cloud array
            this._clouds = new Array();
            // added ocean to the scene
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);
            // added island to the scene
            this._island = new objects.Island();
            this.addChild(this._island);
            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            //added clouds to the scene
            for (var cloud = 0; cloud < this._cloudCount; cloud++) {
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
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            var _this = this;
            this._ocean.update();
            this._island.update();
            this._player.update();
            this._clouds.forEach(function (cloud) {
                cloud.update();
                _this._collision.check(cloud);
            });
            //add score to the player
            while (Play.count++) {
                if ((Play.count % 100) == 0) {
                    this.score++;
                    Play.count = 0;
                }
            }
            this._collision.check(this._island);
            this._livesLabel.text = "Lives: " + this.lives;
            this._scoreLabel.text = "Score: " + this.score;
            if (this.lives == 0) {
                createjs.Sound.stop();
                createjs.Sound.play("gameMusic").loop = -1;
                scene = config.Scene.END;
                changeScene();
            }
        };
        Play.count = 0; //every 100 counts add 1 credit to the score
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));

//# sourceMappingURL=play.js.map
