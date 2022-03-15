// 命名函数
function add(x: number, y: number): number {
  return x + y;
}

// 匿名函数
let myAdd: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

// 箭头函数
let myAdd1: (x: number, y: number) => number = (
  x: number,
  y: number
): number => {
  return x + y;
};

// void
function warnUser(): void {
  console.log("This is my warning message");
}
