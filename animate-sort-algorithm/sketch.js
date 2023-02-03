import { BubbleSort } from "./sort-algorithms/bubble_sort.js";
import { HeapSort } from "./sort-algorithms/heap_sort.js";
import { InsertionSort } from "./sort-algorithms/insertion_sort.js";
import { MergeSort } from "./sort-algorithms/merge_sort.js";
import { QuickSort } from "./sort-algorithms/quick_sort.js";
import { RadixSort } from "./sort-algorithms/radix_sort.js";
import { SelectionSort } from "./sort-algorithms/selection_sort.js";
import { shuffleArray } from "./utils.js";

let values = [];
let len = 100;
let sorting = false;

window.setup = async () => {
  createCanvas(400, 400);
  colorMode(HSB, 100);

  for (let i = 0; i < len; i++) {
    values.push(Math.floor(random(height)));
  }

  createButton("Shuffle").mousePressed(async () => {
    if (sorting) {
      alert("Sorting is already in progress!");
    } else {
      sorting = true;
      await shuffleArray(values);
      sorting = false;
    }
  });

  [
    BubbleSort,
    HeapSort,
    InsertionSort,
    MergeSort,
    QuickSort,
    RadixSort,
    SelectionSort,
  ].forEach((algorithm) => {
    createButton(algorithm.name).mousePressed(async () => {
      if (sorting) {
        alert("Sorting is already in progress!");
      } else {
        sorting = true;
        let s = new algorithm();
        await s.sort(values);
        sorting = false;
      }
    });
  });
};

window.draw = () => {
  background(0);
  strokeWeight(width / len);
  for (let i = 0; i < values.length; i++) {
    stroke(map(values[i], 0, height, 0, 100), 255, 255);
    line((i * width) / len, height, (i * width) / len, height - values[i]);
  }

  if (sorting) {
    drawLoading();
  }
};

let angle = 0;
function drawLoading() {
  translate(15, 15);

  let r = 10;
  noFill();
  strokeWeight(5);
  stroke(255);
  arc(0, 0, r * 2, r * 2, angle - PI, angle);

  angle += 0.05;
}
