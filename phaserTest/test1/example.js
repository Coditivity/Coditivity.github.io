var sprite;
var text;
class example extends Phaser.Scene{
    constructor() {
        super({key:"example"});
        
    }

    preload(){
        this.load.image('ti', 'https://coditivity.github.io/phaserTest/test1/assets/2.png');
        
    }

    
    create() {
        console.log("ok");
        sprite = this.add.image(window.screen.availWidth/2, window.screen.availHeight/2, 'ti');
        text = this.add.text(10, 10, '', { font: '16px Courier', color: '#00ff00' });
    }

    update() {
        sprite.x += 2;
        text.setText([
            'camera.x: ' + 10,
            'camera.y: ' + 2,
            'camera.z: ' + 4
        ]);
    }

    render() {
        //this.debug.cameraInfo(this.camera, 32, 32);
        //this.debug.spriteBounds(sprite);
        game.debug.text( "This is debug text", 100, 380 );
    }
}