import Phaser from "phaser";
console.log("hello");

const config = {
  type: Phaser.AUTO,
  parent: "phaser-container",
  backgroundColor: "#282c34",
  scale: {
    mode: Phaser.Scale.ScaleModes.RESIZE,
    width: window.innerWidth - 100,
    height: window.innerHeight - 100,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  scene: [],
};

const game = new Phaser.Game(config);
console.log(game);
