class Singleton {
  private static instance: any;

  static getInstance<T extends Singleton>(this: new () => T): T {
    // @ts-ignore
    if (!this.instance) {
      // @ts-ignore
      this.instance = new this();
    }

    // @ts-ignore
    return this.instance;
  }
}

export default Singleton;
