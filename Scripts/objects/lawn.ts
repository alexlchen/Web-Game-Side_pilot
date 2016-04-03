/** Source file name: lawn.ts */
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


module objects {
    // OCEAN CLASS ++++++++++++++++++++++++++++++++++++
    export class Lawn extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("lawn");
            
           this._speed.y = 5; //ocean speed
           this._reset(-960);
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the ocean 
            // is met the top of the scene
            
            if(this.y >= value) {
                this._reset(-960);
            }
        }
        
        // reset the ocean offscreen
        protected _reset(value:number):void {
            this.y = value;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the ocean 5 px per frame
            this.y += this._speed.y;
            this._checkBounds(0);
        }
    }
}