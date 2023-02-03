import { sleep } from "../utils.js";

export class HeapSort {
  constructor() {}

  async sort(values) {
    this.values = values;
    this.heapSize = values.length;
    for (let i = Math.floor(this.values.length / 2) - 1; i >= 0; i--) {
      await this.heapify(i);
      await sleep(10);
    }
    for (let i = this.values.length - 1; i >= 0; i--) {
      let temp = this.values[0];
      this.values[0] = this.values[i];
      this.values[i] = temp;
      this.heapSize--;
      await this.heapify(0);
      await sleep(10);
    }
  }

  async heapify(i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    if (l < this.heapSize && this.values[l] > this.values[largest]) {
      largest = l;
    }
    if (r < this.heapSize && this.values[r] > this.values[largest]) {
      largest = r;
    }
    if (largest !== i) {
      let temp = this.values[i];
      this.values[i] = this.values[largest];
      this.values[largest] = temp;
      await this.heapify(largest);
      await sleep(10);
    }
  }
}
