import { sleep } from "../utils.js";

export class QuickSort {
  constructor() {
    this.pivot = 0;
  }

  async sort(arr, start = 0, end = arr?.length) {
    if (start >= end) {
      return;
    }

    let index = await this.partition(arr, start, end);
    await Promise.all([
      this.sort(arr, start, index - 1),
      this.sort(arr, index + 1, end),
    ]);
  }

  async partition(arr, start, end) {
    for (let i = start; i < end; i++) {
      this.pivot = start;
      let wall = start;
      for (let j = start; j < end; j++) {
        if (arr[j] < arr[this.pivot]) {
          wall++;
          [arr[wall], arr[j]] = [arr[j], arr[wall]];
          await sleep(10);
        }
      }
      [arr[this.pivot], arr[wall]] = [arr[wall], arr[this.pivot]];
      this.pivot = wall;
    }
    return this.pivot;
  }
}
