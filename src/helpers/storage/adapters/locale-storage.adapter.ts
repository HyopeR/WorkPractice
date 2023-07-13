import AsyncStorage from '@react-native-async-storage/async-storage';
import {isParseable} from '../utils';

export const get = async (key: string): Promise<any> => {
  const [err, values] = await AsyncStorage.getItem(key).toPromiseArray();

  if (err || !values) {
    return null;
  }

  const parseable = isParseable(values as string);
  return parseable ? JSON.parse(values as string) : values;
};

export const set = async (key: string, value: any): Promise<boolean> => {
  const stringify = typeof value === 'object';
  const data = stringify ? JSON.stringify(value) : value;

  const [err] = await AsyncStorage.setItem(key, data).toPromiseArray();
  return !err;
};

export const remove = async (key: string): Promise<boolean> => {
  const [err] = await AsyncStorage.removeItem(key).toPromiseArray();
  return !err;
};

export const clear = async (): Promise<boolean> => {
  const [err] = await AsyncStorage.clear().toPromiseArray();
  return !err;
};
