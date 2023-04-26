import Phaser from "phaser";

class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: "splashScene" });
  }
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff");
  }
  preload() {
    console.log("Splash Scene");
    this.load.image("splashSceneBackground", "./assets/splash.png");
  }

  create(data) {
    this.splashSceneBackgroundImage = this.add.sprite(
      0,
      0,
      "splashSceneBackground"
    );
    this.splashSceneBackgroundImage.x = (window.innerWidth - 100) / 2;
    this.splashSceneBackgroundImage.y = (window.innerHeight - 100) / 2;
  }

  update(time, delta) {
    if (time >= 2500) {
      this.scene.switch("titleScene");
    }
  }
}

export default SplashScene;
