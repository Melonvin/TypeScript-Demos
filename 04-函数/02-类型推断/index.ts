// 右边指定类型
let myAdd = function (x: number, y: number): number {
  return x + y;
};

// 左边指定类型
let myAdd1: (baseValue: number, increment: number) => number = function (x, y) {
  return x + y;
};
