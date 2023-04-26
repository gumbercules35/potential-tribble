import Phaser from "phaser";
console.log("hello");
import SplashScene from "./SplashScene";
import TitleScene from "./TitleScene";

const splashScene = new SplashScene();
const titleScene = new TitleScene();
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
  scene: [splashScene, titleScene],
};

const game = new Phaser.Game(config);
