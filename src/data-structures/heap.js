class MinHeap {
  constructor() {
    this.heap = [];
  }

  getMin() {
    return this.heap[0];
  }

  swapElements(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  insert(node) {
    this.heap.push(node);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (this.heap[parentIndex] > this.heap[currentIndex]) {
      this.swapElements(parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  remove() {
    let smallestEl = this.getMin();

    if (this.heap.length >= 2) {
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);
    }

    if (this.heap.length === 2 && this.heap[0] > this.heap[1]) {
      this.swapElements(0, 1);
      return smallestEl;
    }

    let currentIndex = 0;
    let leftChildIndex = 2 * currentIndex + 1;
    let rightChildIndex = 2 * currentIndex + 2;

    while (
      this.heap[leftChildIndex] &&
      this.heap[rightChildIndex] &&
      (this.heap[leftChildIndex] < this.heap[currentIndex] ||
        this.heap[rightChildIndex] < this.heap[currentIndex])
    ) {
      if (this.heap[leftChildIndex] < this.heap[currentIndex]) {
        this.swapElements(leftChildIndex, currentIndex);
        currentIndex = leftChildIndex;
      }
      if (this.heap[rightChildIndex] < this.heap[currentIndex]) {
        this.swapElements(rightChildIndex, currentIndex);
        currentIndex = rightChildIndex;
      }

      leftChildIndex = 2 * currentIndex + 1;
      rightChildIndex = 2 * currentIndex + 2;
    }
    if (this.heap[leftChildIndex] < this.heap[currentIndex]) {
      this.swapElements(leftChildIndex, currentIndex);
    }

    if (this.heap.length === 2) {
      this.heap.splice(0, 1);
    } else {
      return null;
    }

    return smallestEl;
  }
}
