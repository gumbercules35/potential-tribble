import Phaser from "phaser";

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: "titleScene" });
  }
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff");
  }
  preload() {
    console.log("Title Scene");
    this.load.image("titleSceneBackground", "/assets/title.png");
  }

  create(data) {
    this.titleSceneBackgroundImage = this.add.sprite(
      0,
      0,
      "titleSceneBackground"
    );
    this.titleSceneBackgroundImage.x = (window.innerWidth - 100) / 2;
    this.titleSceneBackgroundImage.y = (window.innerHeight - 100) / 2;
  }

  update(time, delta) {
    if (time >= 3500) {
      this.scene.switch("menuScene");
    }
  }
}

export default TitleScene;
