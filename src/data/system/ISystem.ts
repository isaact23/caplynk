/**
 * The interface for a system managed by caplynk.
 */
export default interface ISystem {
  /**
   * Get whether a system is active.
   * @returns {boolean} Whether the system is active.
   */
  isActive(): boolean;
}