import { sleep } from "../utils.js";

export class BubbleSort {
  constructor() {
    this.i = 0;
    this.j = 0;
  }

  async sort(arr) {
    let { i, j } = this;
    let swapped;
    do {
      swapped = false;
      for (j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;
          await sleep(0);
        }
      }
      i++;
    } while (swapped);
  }
}
