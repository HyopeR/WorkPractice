declare global {
  interface Promise<T> {
    toPromiseArray(): Promise<[Error | null, T | undefined]>;
  }
}

Promise.prototype.toPromiseArray = function <T>() {
  return this.then<[null, T]>((data: T) => {
    return [null, data];
  }).catch<[Error, undefined]>((err: Error) => {
    return [err, undefined];
  });
};

export {};
