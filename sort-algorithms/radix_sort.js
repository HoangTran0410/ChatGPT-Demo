import { sleep } from "../utils.js";

export class RadixSort {
  constructor() {}

  getMaxDigitCount(values) {
    let max = 0;
    for (let i = 0; i < values.length; i++) {
      max = Math.max(max, this.getDigitCount(values[i]));
    }
    return max;
  }

  getDigitCount(value) {
    if (value === 0) return 1;
    return Math.floor(Math.log10(value)) + 1;
  }

  getDigit(value, position) {
    return Math.floor(value / Math.pow(10, position - 1)) % 10;
  }

  async sort(values) {
    let maxDigitCount = this.getMaxDigitCount(values);
    for (let i = 0; i < maxDigitCount; i++) {
      let buckets = Array.from({ length: 10 }, () => []);
      for (let j = 0; j < values.length; j++) {
        let digit = this.getDigit(values[j], i + 1);
        buckets[digit].push(values[j]);
      }
      let flat = buckets.flat();
      for (let i = 0; i < flat.length; i++) {
        values[i] = flat[i];
        await sleep(10);
      }
    }
    return values;
  }
}
