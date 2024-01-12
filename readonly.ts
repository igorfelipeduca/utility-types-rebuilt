export type MyReadOnly<T> = {
  readonly [key in keyof T]: T[key];
};

const person: MyReadOnly<Person> = {
  id: 1,
  name: "igor",
  email: "igor@duca.dev",
};

console.log({ obj: person, type: typeof person });
