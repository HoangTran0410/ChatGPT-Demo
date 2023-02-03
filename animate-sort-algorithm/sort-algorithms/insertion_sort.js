import { sleep } from "../utils.js";

export class InsertionSort {
  constructor() {
    this.i = 0;
    this.j = 0;
  }

  async sort(arr) {
    let { i, j } = this;

    for (i = 1; i < arr.length; i++) {
      let key = arr[i];
      j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
        await sleep(10);
      }
      arr[j + 1] = key;
    }
  }
}
