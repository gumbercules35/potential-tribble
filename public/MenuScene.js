import Phaser from "phaser";

class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "menuScene" });
  }
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff");
  }
  preload() {
    console.log("Menu Scene");
    this.load.image("menuSceneBackground", "/assets/menu.png");
  }

  create(data) {
    this.menuSceneBackgroundImage = this.add.sprite(
      0,
      0,
      "menuSceneBackground"
    );
    this.menuSceneBackgroundImage.x = (window.innerWidth - 100) / 2;
    this.menuSceneBackgroundImage.y = (window.innerHeight - 100) / 2;
  }

  update(time, delta) {}
}

export default MenuScene;
