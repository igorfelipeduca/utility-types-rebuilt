export type MyPartial<T> = {
  [key in keyof T]?: T[key];
};

const partialPerson: MyPartial<Person> = {
  id: 12,
  name: "igor",
};

console.log({ obj: partialPerson, type: typeof partialPerson });
