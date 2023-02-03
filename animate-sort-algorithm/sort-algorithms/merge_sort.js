import { sleep } from "../utils.js";

export class MergeSort {
  constructor() {}

  async sort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
      let mid = Math.floor((start + end) / 2);
      await this.sort(arr, start, mid);
      await this.sort(arr, mid + 1, end);
      await this.merge(arr, start, mid, end);
    }
  }

  async merge(arr, start, mid, end) {
    let n1 = mid - start + 1;
    let n2 = end - mid;
    let L = [];
    let R = [];
    for (let i = 0; i < n1; i++) {
      L[i] = arr[start + i];
    }
    for (let j = 0; j < n2; j++) {
      R[j] = arr[mid + 1 + j];
    }
    let i = 0;
    let j = 0;
    let k = start;
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
      await sleep(10);
    }
    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }
    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }
  }
}
