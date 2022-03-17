interface Person {
  name: string;
  age: number;
  sing: () => void;
}

let person: Person = {
  name: "Melon",
  age: 18,
  sing: () => {
    console.log("singing");
  },
};
