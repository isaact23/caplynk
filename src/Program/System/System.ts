import { ISystem } from "./ISystem";

/**
 * One system managed by caplynk.
 */
export class System implements ISystem {

  private _isActive: boolean = false;

  constructor(
    public readonly name: string
  ) {
    
  }

  /**
   * Get whether a system is active.
   * @returns {boolean} Whether the system is active.
   */
  public isActive(): boolean {
    return this._isActive;
  }
}