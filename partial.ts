export type MyPartial<T> = {
  [key in keyof T]?: T[key];
};

type Person = {
  id: number;
  name: string;
  email: string;
};

const partialPerson: MyPartial<Person> = {
  id: 12,
  name: "igor",
};

console.log({ obj: partialPerson, type: typeof partialPerson });
