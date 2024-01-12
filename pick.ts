export type MyPick<T, K extends keyof T> = {
  [key in K]: T[K];
};

type newPerson = MyPick<Person, "name" | "email">;

const person: newPerson = {
  name: "Igor",
  email: "igor@duca.dev",
};

console.log({ obj: person, type: typeof person });
