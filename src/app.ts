import * as THREE from 'three';
import { InputComponent } from './components/input/input.component';

class Application{
  private clock: THREE.Clock;
  private inputComponent: InputComponent;

  constructor(){
    this.clock = new THREE.Clock();
    this.inputComponent = new InputComponent();
  }

  public initialize(){

  }

  public run(){
    this.initialize();
    this.render(this.clock.getDelta());
  }

  /**
   * Updates the game logic.
   * @param {number} time - Elapsed time in seconds since last update.
   */
  public update(time: number){
    // Insert your update logic here, call input update afterwards.

    this.inputComponent.update(time);
  }

   /**
   * Updates the game logic and redraws the scene.
   * @param {number} time - Elapsed time in seconds since last rendering.
   */
  public render(time: number){
    this.update(time);

    // Insert all your render logic here.

    requestAnimationFrame(() => {
      this.render(this.clock.getDelta());
    });
  }
}

const app = new Application();
app.run();