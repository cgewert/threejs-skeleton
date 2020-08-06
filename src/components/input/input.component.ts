export class InputComponent{
  private _pressedKeys = Array<KeyboardKeys>();
  private _pressedKeysOld = Array<KeyboardKeys>();
  private _pressedMouseButtons = Array<MouseButtons>();
  private _pressedMouseButtonsOld = Array<MouseButtons>();

  constructor() {
    window.addEventListener('keydown', (event: KeyboardEvent) => {
      this.addKey(event);
    }, false);

    window.addEventListener('keyup', (event: KeyboardEvent) => {
      this.removeKey(event);
    }, false);

    window.addEventListener('mouseup', (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();

      this.removeButton(event);
    }, false);

    window.addEventListener('mousedown', (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();

      this.addButton(event);
    }, false);
  }

  /**
   * Returns all pressed Keyboard keys.
   * @returns {Array<KeyboardKeys>}
   */
  public get pressedKeys(): Array<KeyboardKeys> {
    return this._pressedKeys;
  }

  /**
   * Returns all pressed Mouse buttons.
   * @returns {Array<MouseButtons>}
   */
  public get pressedButtons(): Array<MouseButtons> {
    return this._pressedMouseButtons;
  }

  /**
   * Adds the pressed key to the list of pressed keys, if not already pressed.
   * @param {KeyboardEvent} event - The KeyboardEvent that triggered the event handler.
   */
  private addKey(event: KeyboardEvent) {
    const key = event.keyCode;

    if(this._pressedKeys.indexOf(key) === -1) {
      this._pressedKeys.push(key);
    }
  }

  /**
   * Removes the pressed key from the list of pressed keys.
   * @param {KeyboardEvent} event - The KeyboardEvent that triggered the event handler.
   */
  private removeKey(event: KeyboardEvent) {
    const key = event.keyCode;

    this._pressedKeys.splice(
      this._pressedKeys.indexOf(key), 1
    );
  }

  /**
   * Adds the pressed mouse button to the list of pressed buttons.
   * @param {MouseEvent} event - The MouseEvent that triggered the event handler.
   */
  private addButton(event: MouseEvent) {
    this._pressedMouseButtons.push(event.button);
  }

  /**
   * Removes the pressed mouse button from the list of pressed buttons.
   * @param event - The MouseEvent that triggered the event handler.
   */
  private removeButton(event: MouseEvent){
    this._pressedMouseButtons.splice(
      this._pressedMouseButtons.indexOf(event.button), 1
    );
  }

  /**
   * Queries the pressed state of a given mouse button.
   * @param {MouseButtons} button - The Mouse button to query.
   * @param {boolean} repeat - If set to false only first press returns true.
   * @returns {boolean}
   */
  public isButtonPressed(button: MouseButtons, repeat: boolean = false): boolean {
    const isPressed = this._pressedMouseButtons.indexOf(button) !== -1;
    const isPressedInitially = isPressed && this._pressedMouseButtonsOld.indexOf(button) === -1;

    return repeat ? isPressed : isPressedInitially;
  }

  /**
   * Queries the pressed state of a given key.
   * @param {KeyboardKeys} key - The Key to query.
   * @param {boolean} repeat - If set to false only first key press returns true.
   * @returns {boolean}
   */
  public isKeyPressed(key: KeyboardKeys, repeat: boolean = false): boolean {
    const isPressed = this._pressedKeys.indexOf(key) !== -1;
    const isPressedInitially = isPressed && this._pressedKeysOld.indexOf(key) === -1;

    return repeat ? isPressed : isPressedInitially;
  }

  /**
   * Updates the InputComponent state.
   * @param {number} time - Seconds since last update call.
   */
  public update(time: number){
    this._pressedKeysOld = this._pressedKeys.slice(0);
    this._pressedMouseButtonsOld = this._pressedMouseButtons.slice(0);
  }
}

export enum KeyboardKeys {
  BACKSPACE = 8,
  ENTER = 13,
  SHIFT = 16,
  ALT = 18,
  SPACE = 32,
  ARROWLEFT = 37,
  ARROWUP = 38,
  ARROWRIGHT = 39,
  ARROWDOWN = 40,
  ZERO = 48,
  ONE = 49,
  TWO = 50,
  THREE = 51,
  FOUR = 52,
  FIVE = 53,
  SIX = 54,
  SEVEN = 55,
  EIGHT = 56,
  NINE = 57,
  A = 65,
  B = 66,
  C = 67,
  D = 68,
  E = 69,
  F = 70,
  G = 71,
  H = 72,
  I = 73,
  J = 74,
  K = 75,
  L = 76,
  M = 77,
  N = 78,
  O = 79,
  P = 80,
  Q = 81,
  R = 82,
  S = 83,
  T = 84,
  U = 85,
  V = 86,
  W = 87,
  X = 88,
  Y = 89,
  Z = 90
}

export enum MouseButtons {
  LEFT = 0,
  MIDDLE = 1,
  RIGHT = 2
}