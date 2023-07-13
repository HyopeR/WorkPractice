import RNConfig from 'react-native-config';
import {Mixin} from 'ts-mixer';
import {Singleton} from '../../helpers/class';

class EnvService extends Mixin(Singleton) {
  #env = RNConfig;

  get data() {
    return this.#env;
  }
}

const Env = new EnvService();
export {Env};
