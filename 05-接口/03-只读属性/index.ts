interface Person {
  readonly id: string;
  name: string;
  age?: number;
}

let person: Person = {
  id: "1",
  name: "Melon",
};

person.id = "2";
