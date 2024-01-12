export type myAwaited<T> = T extends PromiseLike<infer U> ? U : never;

const personPromise: myAwaited<Promise<Person>> = {
  id: 1,
  name: "igor",
  email: "igor@duca.dev",
};

console.log({ obj: personPromise, type: typeof personPromise });
