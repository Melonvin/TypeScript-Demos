// function reverse(x: number | string): any {
//   if (typeof x === "number") {
//     return Number(x.toString().split("").reverse().join(""));
//   } else if (typeof x === "string") {
//     return x.split("").reverse().join("");
//   }
// }

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: any): any {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  } else if (typeof x === "string") {
    return x.split("").reverse().join("");
  }
}
