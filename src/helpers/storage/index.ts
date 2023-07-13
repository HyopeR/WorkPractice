import * as Adapter from './adapters/locale-storage.adapter';

class StorageService {
  get(key: string) {
    return Adapter.get(key);
  }

  set(key: string, value: any) {
    return Adapter.set(key, value);
  }

  remove(key: string) {
    return Adapter.remove(key);
  }

  clear() {
    return Adapter.clear();
  }
}

const Storage = new StorageService();
export {Storage};
