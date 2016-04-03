var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // OCEAN CLASS ++++++++++++++++++++++++++++++++++++
    var Lawn = (function (_super) {
        __extends(Lawn, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Lawn() {
            _super.call(this, "lawn");
            this._speed.y = 5; //ocean speed
            this._reset(-960);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Lawn.prototype._checkBounds = function (value) {
            // check to see if the top of the ocean 
            // is met the top of the scene
            if (this.y >= value) {
                this._reset(-960);
            }
        };
        // reset the ocean offscreen
        Lawn.prototype._reset = function (value) {
            this.y = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Lawn.prototype.update = function () {
            // scroll the ocean 5 px per frame
            this.y += this._speed.y;
            this._checkBounds(0);
        };
        return Lawn;
    }(objects.GameObject));
    objects.Lawn = Lawn;
})(objects || (objects = {}));

//# sourceMappingURL=lawn.js.map
