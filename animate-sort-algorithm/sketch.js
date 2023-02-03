import { BubbleSort } from "./sort-algorithms/bubble_sort.js";
import { HeapSort } from "./sort-algorithms/heap_sort.js";
import { InsertionSort } from "./sort-algorithms/insertion_sort.js";
import { MergeSort } from "./sort-algorithms/merge_sort.js";
import { QuickSort } from "./sort-algorithms/quick_sort.js";
import { RadixSort } from "./sort-algorithms/radix_sort.js";
import { SelectionSort } from "./sort-algorithms/selection_sort.js";

let values = [];
let len = 100;
let s;

window.setup = async () => {
  createCanvas(400, 400);
  colorMode(HSB, 100);

  for (let i = 0; i < len; i++) {
    values.push(Math.floor(random(height)));
  }

  //   s = new QuickSort();
  //   s = new SelectionSort();
  //   s = new BubbleSort();
  //   s = new InsertionSort();
  //   s = new MergeSort();
  //   s = new HeapSort();
  s = new RadixSort();

  await s.sort(values);
};

window.draw = () => {
  background(0);
  strokeWeight(width / len);
  for (let i = 0; i < values.length; i++) {
    stroke(map(values[i], 0, height, 0, 100), 255, 255);
    line((i * width) / len, height, (i * width) / len, height - values[i]);
  }
};
