class NodeStore {
  constructor() {
    this.counter = 0;
    this.map = {};
  }
  /**
   * @param {Node} node
   * @param {any} value
   */
  set(node, value) {
    node.__id = this.counter;
    this.map[this.counter] = value;
    this.counter += 1;
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    return this.map[node.__id];
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return Boolean(this.map[node.__id]);
  }
}
