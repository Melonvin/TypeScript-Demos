// let add: (baseValue: number, increment: number) => number;
// add = (x, y) => x + y;

interface Add {
  (baseValue: number, increment: number): number;
}

let add: Add = (x, y) => x + y;
