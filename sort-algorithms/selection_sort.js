import { sleep } from "../utils.js";

export class SelectionSort {
  constructor() {
    this.i = 0;
    this.j = 0;
  }

  async sort(arr) {
    let { i, j } = this;

    for (i = 0; i < arr.length; i++) {
      let min = i;
      for (j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      [arr[min], arr[i]] = [arr[i], arr[min]];
      await sleep(10);
    }
  }
}
